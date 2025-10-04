'use client';

import {
  BrainCircuit,
  Database,
  CircuitBoard,
  Cog,
  Code,
  FlaskConical,
  IconProps,
} from 'lucide-react';

type DomainIconProps = {
  name: string;
} & IconProps;

const iconMap: { [key: string]: React.FC<IconProps> } = {
  DataScience: Database,
  AIML: BrainCircuit,
  Electrical: CircuitBoard,
  Mechanical: Cog,
  Software: Code,
  Biotech: FlaskConical,
};

export const DomainIcon = ({ name, ...props }: DomainIconProps) => {
  const IconComponent = iconMap[name];
  if (!IconComponent) {
    return <Code {...props} />; // fallback icon
  }
  return <IconComponent {...props} />;
};
