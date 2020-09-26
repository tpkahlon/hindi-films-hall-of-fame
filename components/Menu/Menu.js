import React, { useContext } from 'react';
import Link from 'next/link';
import { menu } from './Menu.module.scss';
import { MdStars } from 'react-icons/md';
import { RiLightbulbLine } from 'react-icons/ri';
import { GrContactInfo } from 'react-icons/gr';
import Context from '../Context/Context';

const MenuButton = React.forwardRef(({ onClick, href }, ref) => (
  <a href={href} onClick={onClick} ref={ref}>
    <MdStars />
  </a>
));

const AboutButton = React.forwardRef(({ onClick, href }, ref) => (
  <a href={href} onClick={onClick} ref={ref}>
    <GrContactInfo />
  </a>
));

const Menu = () => {
  const { handleDarkMode } = useContext(Context);
  return (
    <nav className={menu}>
      <Link href='/' passHref>
        <MenuButton />
      </Link>
      <Link href='/about' passHref>
        <AboutButton />
      </Link>
      <a href='#' onClick={handleDarkMode} rel='noopener noreferrer'>
        <RiLightbulbLine />
      </a>
    </nav>
  );
};

export default Menu;
