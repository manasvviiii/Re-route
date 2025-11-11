'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, ChevronDown } from 'lucide-react';

export default function SupportPage() {
  const [messages, setMessages] = useState<Array<{ id: number; text: string; sender: string; timestamp: Date }>>([]);
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    setMessages([
      {
        id: 1,
        text: "👋 Hi there! I'm your Re-route Support Assistant. I can guide you around the website — just select a question from the list below.",
        sender: 'bot',
        timestamp: new Date(),
      },
    ]);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // 🔗 Define your website structure
  const siteMap: Record<string, { path: string; description: string }> = {
    home: { path: '/', description: 'Return to the homepage and overview of Re-route.' },
    aptitudeTest: { path: '/aptitude-test', description: 'Take the Aptitude Test to find your ideal engineering path.' },
    domains: { path: '/domains', description: 'Explore detailed information about engineering fields.' },
    community: { path: '/community', description: 'Join discussions and connect with other students.' },
    empowerment: { path: '/empowerment', description: 'Read motivational stories and self-improvement tips.' },
    resources: { path: '/resources', description: 'Find study materials and career tools.' },
    login: { path: '/login', description: 'Sign in to access personalized features.' },
    support: { path: '/support', description: 'This is where you chat with me for guidance!' },
  };

  // 🧠 Predefined list of questions
  const questionOptions = [
    { key: 'test', label: 'Where can I take the Aptitude Test?' },
    { key: 'domains', label: 'What are the different engineering domains?' },
    { key: 'community', label: 'How can I join the student community?' },
    { key: 'empowerment', label: 'Where can I find motivation and confidence tips?' },
    { key: 'resources', label: 'How do I access study materials and resources?' },
    { key: 'login', label: 'How do I log in or sign up?' },
    { key: 'home', label: 'Take me to the homepage.' },
  ];

  // ✨ Helper for clickable links
  const linkTo = (label: string, path: string) =>
    `<a href="${path}" class="text-blue-600 underline hover:text-blue-800 transition">${label}</a>`;

  // 🎯 Bot responses
  const getResponse = (key: string): string => {
    switch (key) {
      case 'test':
        return `You can take the Aptitude Test ${linkTo('here', siteMap.aptitudeTest.path)}. It helps you discover which engineering domain suits you best!`;
      case 'domains':
        return `Visit the ${linkTo('Domains section', siteMap.domains.path)} to explore fields like Software, AI, Mechanical, and more.`;
      case 'community':
        return `Our ${linkTo('Community forum', siteMap.community.path)} is the perfect place to connect, share, and grow with other students.`;
      case 'empowerment':
        return `Need motivation? Check out the ${linkTo('Empowerment hub', siteMap.empowerment.path)} for confidence-boosting stories and articles.`;
      case 'resources':
        return `You can access useful learning resources and career tools ${linkTo('here', siteMap.resources.path)}.`;
      case 'login':
        return `To log in or create an account, head to the ${linkTo('Login page', siteMap.login.path)}.`;
      case 'home':
        return `Sure! You can go back to the ${linkTo('Home page', siteMap.home.path)} anytime.`;
      default:
        return `I’m here to guide you around Re-route! Please select a question from the dropdown menu.`;
    }
  };

  // 📩 Handle user selecting a question
  const handleAsk = () => {
    if (!selectedQuestion) return;

    const questionObj = questionOptions.find((q) => q.key === selectedQuestion);
    if (!questionObj) return;

    const userMessage = {
      id: Date.now(),
      text: questionObj.label,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: getResponse(selectedQuestion),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] bg-background">
      {/* Header */}
      <div className="bg-card shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center gap-3">
          <div className="bg-gradient-to-r from-[#FFB347] to-[#FFDA63] p-2 rounded-full">
            <Bot className="w-6 h-6 text-accent-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground font-headline">Re-route Support</h1>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="container mx-auto space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  msg.sender === 'bot'
                    ? 'bg-gradient-to-r from-[#FFB347] to-[#FFDA63]'
                    : 'bg-primary'
                }`}
              >
                {msg.sender === 'bot' ? (
                  <Bot className="w-5 h-5 text-accent-foreground" />
                ) : (
                  <User className="w-5 h-5 text-primary-foreground" />
                )}
              </div>

              <div className={`flex flex-col max-w-md ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                <div
                  className={`rounded-2xl px-4 py-3 shadow-sm ${
                    msg.sender === 'bot'
                      ? 'bg-card text-foreground border'
                      : 'bg-primary text-primary-foreground'
                  }`}
                >
                  <p
                    className="whitespace-pre-line"
                    dangerouslySetInnerHTML={{ __html: msg.text }}
                  ></p>
                </div>
                <span className="text-xs text-muted-foreground mt-1 px-2">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-[#FFB347] to-[#FFDA63] flex items-center justify-center">
                <Bot className="w-5 h-5 text-accent-foreground" />
              </div>
              <div className="bg-card rounded-2xl px-4 py-3 shadow-sm border">
                <div className="flex gap-1.5 items-center">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                    style={{ animationDelay: '0.2s' }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                    style={{ animationDelay: '0.4s' }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Dropdown Input */}
      <div className="bg-card border-t">
        <div className="container mx-auto px-4 py-4">
          <div className="flex gap-3 items-center">
            <div className="flex-1 bg-background rounded-2xl border px-4 py-3 flex items-center justify-between">
              <select
                value={selectedQuestion}
                onChange={(e) => setSelectedQuestion(e.target.value)}
                className="bg-transparent w-full outline-none cursor-pointer"
              >
                <option value="">Select a question...</option>
                {questionOptions.map((q) => (
                  <option key={q.key} value={q.key}>
                    {q.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            </div>
            <button
              onClick={handleAsk}
              disabled={!selectedQuestion}
              className="bg-primary text-primary-foreground p-3 rounded-xl hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
