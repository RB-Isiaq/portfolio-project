import { ILink } from '@/interfaces';

export const navLinks: ILink[] = [
  { id: 1, label: 'Home', href: '#home', path: '/home.svg' },
  { id: 2, label: 'About', href: '#about', path: '/about.svg' },
  { id: 3, label: 'Projects', href: '#projects', path: '/project.svg' },
  { id: 4, label: 'Contact', href: '#contact', path: '/contact.svg' },
];

export const TestId = {
  NAV_ID: 'NAV_ID',
  NAME: 'My Name',
  NAV_LINK: 'NAV_LINK',
};
