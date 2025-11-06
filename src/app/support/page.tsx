
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';

export default function SupportPage() {
  const [messages, setMessages] = useState<Array<{id: number, text: string, sender: string, timestamp: Date}>>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Set initial message only on the client to avoid hydration mismatch
    setMessages([
      {
        id: 1,
        text: "Hello! I'm your Re-route support assistant. How can I help you today? You can ask about engineering domains, the aptitude test, or how to navigate the site.",
        sender: 'bot',
        timestamp: new Date()
      }
    ]);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const knowledgeBase: Record<string, string[]> = {
    greetings: ['hello', 'hi', 'hey', 'good morning', 'good afternoon'],
    domains: ['domain', 'engineering', 'field', 'branch', 'which career'],
    aptitudeTest: ['test', 'aptitude', 'survey', 'quiz', 'assessment', 'compatibility'],
    resources: ['resources', 'learning', 'courses', 'upskill', 'prepare'],
    community: ['community', 'forum', 'connect', 'discussion'],
    technical: ['not working', 'broken', 'error', 'bug', 'issue', 'problem', 'login'],
  };

  const getResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();

    if (knowledgeBase.greetings.some(word => msg.includes(word))) {
      return "Hello! I'm happy to help. What would you like to know about Re-route or engineering careers?";
    }

    if (knowledgeBase.domains.some(word => msg.includes(word))) {
      return "The 'Domains' section has detailed guides on various engineering fields like Software, AI/ML, Mechanical, and more. It covers job outlooks, salary expectations, and required skills. You can explore it to find the best fit for you.";
    }

    if (knowledgeBase.aptitudeTest.some(word => msg.includes(word))) {
      return "The Aptitude Test is designed to match your problem-solving style with suitable engineering domains. It's a great first step! You can find it in the 'Aptitude Test' section from the main menu.";
    }
    
    if (knowledgeBase.resources.some(word => msg.includes(word))) {
        return "We have a curated list of high-quality learning resources, including free courses from NPTEL and hands-on projects, in our 'Resources' section. It's perfect for upskilling!";
    }
    
    if (knowledgeBase.community.some(word => msg.includes(word))) {
        return "Our 'Community' forum is a place to connect with peers, ask questions, and share experiences. You need to be logged in to create posts and join the conversation.";
    }

    if (knowledgeBase.technical.some(word => msg.includes(word))) {
      return "I'm sorry you're running into an issue. Could you describe the problem in more detail? Please mention the page you were on and what you were trying to do. This will help me assist you better.";
    }

    if (msg.includes('thank')) {
      return "You're very welcome! Is there anything else I can help you with today?";
    }

    return "I'm sorry, I'm not sure how to answer that. My main purpose is to help you navigate Re-route. You can ask me about our features like the Empowerment Hub, Domain Navigator, or Aptitude Test.";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: getResponse(input),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] bg-background">
      {/* Header */}
      <div className="bg-card shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
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
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="container mx-auto space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                message.sender === 'bot' 
                  ? 'bg-gradient-to-r from-[#FFB347] to-[#FFDA63]' 
                  : 'bg-primary'
              }`}>
                {message.sender === 'bot' ? (
                  <Bot className="w-5 h-5 text-accent-foreground" />
                ) : (
                  <User className="w-5 h-5 text-primary-foreground" />
                )}
              </div>
              
              <div className={`flex flex-col max-w-md ${message.sender === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`rounded-2xl px-4 py-3 shadow-sm ${
                  message.sender === 'bot'
                    ? 'bg-card text-foreground border'
                    : 'bg-primary text-primary-foreground'
                }`}>
                  <p className="whitespace-pre-line">{message.text}</p>
                </div>
                <span className="text-xs text-muted-foreground mt-1 px-2">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
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
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-card border-t">
        <div className="container mx-auto px-4 py-4">
          <div className="flex gap-3 items-end">
            <div className="flex-1 bg-background rounded-2xl border focus-within:border-primary focus-within:ring-2 focus-within:ring-ring transition-all">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about domains, the aptitude test, or site features..."
                className="w-full px-4 py-3 bg-transparent border-none outline-none resize-none max-h-32"
                rows={1}
              />
            </div>
            <button
              onClick={handleSend}
              disabled={!input.trim()}
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
