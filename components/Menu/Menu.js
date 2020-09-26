import React, { useContext } from 'react';
import Link from 'next/link';
import { menu } from './Menu.module.scss';
import { MdStars } from 'react-icons/md';
import { RiLightbulbLine } from 'react-icons/ri';
import { GrContactInfo } from 'react-icons/gr';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { IoIosMale, IoMdFemale } from 'react-icons/io';
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
  const {
    handleDarkMode,
    handleViewMode,
    handleMaleMode,
    handleFemaleMode,
  } = useContext(Context);
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
      <a href='#' onClick={handleViewMode} rel='noopener noreferrer'>
        <BsGrid3X3GapFill />
      </a>
      <a href='#' onClick={handleMaleMode} rel='noopener noreferrer'>
        <IoIosMale />
      </a>
      <a href='#' onClick={handleFemaleMode} rel='noopener noreferrer'>
        <IoMdFemale />
      </a>
    </nav>
  );
};

export default Menu;
