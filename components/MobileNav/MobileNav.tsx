import React from 'react';
import { navLinks } from '../Navbar/constants';
import Image from 'next/image';
import styles from './MobileNav.module.scss';

const MobileNav = () => {
  return (
    <ul className={styles.nav}>
      {navLinks.map((link) => (
        <li key={link.id}>
          <a title="link" href={link.href}>
            <Image src={link.path} alt={link.label} width={30} height={30} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MobileNav;
