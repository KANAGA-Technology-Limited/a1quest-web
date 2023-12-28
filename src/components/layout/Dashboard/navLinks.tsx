import {
  AccountIcon,
  AssignmentIcon,
  BookmarkIcon,
  CommunityIcon,
  HelpIcon,
  HomeIcon,
  LeaderboardIcon,
  LearningIcon,
  ProfileIcon,
  ReportIcon,
} from './navIcons';

interface NavLinkType {
  label: string;
  href: string;
  icon?: JSX.Element;
  type?: 'link' | 'divider';
  disabled?: boolean;
}

const navLinks: NavLinkType[] = [
  { label: 'Home', href: '/dashboard/home/', icon: <HomeIcon /> },
  { label: 'Leaderboard', href: '/dashboard/leaderboard/', icon: <LeaderboardIcon /> },
  {
    label: 'Report & Analytics',
    href: '/dashboard/report/',
    icon: <ReportIcon />,
  },
  { label: '', href: '', type: 'divider' },
  { label: 'My Learning', href: '/dashboard/learning/', icon: <LearningIcon /> },
  {
    label: 'Assignment',
    href: '/dashboard/assignment/',
    icon: <AssignmentIcon />,
    disabled: true,
  },
  { label: 'Bookmarks', href: '/dashboard/bookmarks/', icon: <BookmarkIcon /> },
  {
    label: 'Community',
    href: '/dashboard/community/',
    icon: <CommunityIcon />,
    disabled: true,
  },
  { label: '', href: '', type: 'divider' },
  { label: 'Profile', href: '/dashboard/profile/', icon: <ProfileIcon /> },
  { label: 'Account', href: '/dashboard/account/', icon: <AccountIcon /> },
  { label: 'Help & Support', href: '/dashboard/help/', icon: <HelpIcon /> },
];

export default navLinks;
