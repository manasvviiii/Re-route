'use client';

import {
  BrainCircuit,
  Database,
  CircuitBoard,
  Cog,
  Code,
  FlaskConical,
  IconProps,
  Landmark,
  Rocket
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
  Civil: Landmark,
  Aeronautical: Rocket,
};

export const DomainIcon = ({ name, ...props }: DomainIconProps) => {
  const IconComponent = iconMap[name];
  if (!IconComponent) {
    return <Code {...props} />; // fallback icon
  }
  return <IconComponent {...props} />;
};
