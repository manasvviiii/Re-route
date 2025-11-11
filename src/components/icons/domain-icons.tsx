'use client';

import {
  Code,
  FlaskConical,
  Landmark,
  Rocket
} from 'lucide-react';

import type { LucideProps as IconProps } from 'lucide-react';

type DomainIconName =
  | 'Software'
  | 'DataScience'
  | 'AIML'
  | 'Mechanical'
  | 'Electrical'
  | 'Civil'
  | 'Biotech'
  | 'Aeronautical';

export function DomainIcon({ name, ...props }: { name: DomainIconName } & IconProps) {
  switch (name) {
    case 'Software':
      return <Code {...props} />;
    case 'DataScience':
      return <FlaskConical {...props} />;
    case 'AIML':
      return <Rocket {...props} />;
    case 'Mechanical':
    case 'Electrical':
    case 'Civil':
    case 'Biotech':
    case 'Aeronautical':
      return <Landmark {...props} />;
    default:
      return <Code {...props} />;
  }
}
