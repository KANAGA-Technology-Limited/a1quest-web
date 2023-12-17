import React from 'react';
import {
  AccessibilityIcon,
  ConfidenceIcon,
  EffectiveIcon,
  EmpowermentIcon,
  ExcellenceIcon,
} from './icons';

type benefits = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export const BenefitsList: benefits[] = [
  {
    title: 'Build Confidence',
    description: 'Conquer math anxiety and gain confidence in your math skills.',
    icon: <ConfidenceIcon />,
  },
  {
    title: 'Empowerment',
    description:
      "A1Quest empowers you to confidently support your child's learning journey.",
    icon: <EmpowermentIcon />,
  },
  {
    title: 'Accessibility Learning',
    description: "Study at your own pace, whether you're in the classroom or at home.",
    icon: <AccessibilityIcon />,
  },
  {
    title: 'Unlock Academic Excellence',
    description:
      "A1Quest ensures your child's math success, propelling them to new heights in their academic journey.",
    icon: <ExcellenceIcon />,
  },
  {
    title: 'Effective Learning Tool',
    description:
      'A1Quest complements classroom learning, making teaching math more effective.',
    icon: <EffectiveIcon />,
  },
];
