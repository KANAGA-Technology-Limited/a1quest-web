interface NavLinkType {
  label: string;
  href: string;
}

const navLinks: NavLinkType[] = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/about' },
  { label: 'Contact us', href: '/contact' },
];

export default navLinks;
