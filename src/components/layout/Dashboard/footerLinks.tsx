import { StaticImageData } from 'next/image';
import facebookImage from '@/assets/icons/socials/facebook.svg';
import instagramImage from '@/assets/icons/socials/instagram.svg';
import telegramImage from '@/assets/icons/socials/telegram.svg';
import twitterImage from '@/assets/icons/socials/twitter.svg';

interface LinkType {
  name: string;
  href: string;
}

interface SocialType {
  image: StaticImageData;
  href: string;
}

export const footerLinks: LinkType[] = [
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'FAQs',
    href: '/faqs',
  },
  {
    name: 'Pricing',
    href: '/pricing',
  },
  {
    name: 'Privacy Policy',
    href: '/privacy-policy',
  },
  {
    name: 'Terms of Use',
    href: '/terms',
  },
];

export const SocialLinks: SocialType[] = [
  {
    image: twitterImage,
    href: '',
  },
  {
    image: facebookImage,
    href: '',
  },
  {
    image: instagramImage,
    href: '',
  },
  {
    image: telegramImage,
    href: '',
  },
];
