import { StaticImageData } from 'next/image';
import DefaultTeamImage from '@/assets/images/home/team/default.webp';

export interface TeamType {
  image: StaticImageData;
  name: string;
  role: string;
}

const team: TeamType[] = [
  {
    image: DefaultTeamImage,
    name: 'Team Name Here',
    role: 'Teammate Role',
  },
  {
    image: DefaultTeamImage,
    name: 'Team Name Here',
    role: 'Teammate Role',
  },
  {
    image: DefaultTeamImage,
    name: 'Team Name Here',
    role: 'Teammate Role',
  },
];

export default team;
