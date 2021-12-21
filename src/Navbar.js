import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { openSideBar, openSubMenu, closeSubMenu } = useGlobalContext();

  const displaySideMenu = (e) => {
    const page = e.target.textContent;
    const temp = e.target.getBoundingClientRect();
    const center = (temp.left + temp.right) / 2;
    const bottom = temp.bottom - 3;
    openSubMenu(page, { center, bottom });
  };

  const handleSubMenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubMenu();
    }
  };
  return (
    <nav className='nav' onMouseOver={handleSubMenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='stripe' />
          <button className='btn toggle-btn' onClick={openSideBar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySideMenu}>
              products
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySideMenu}>
              developers
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySideMenu}>
              company
            </button>
          </li>
        </ul>
        <button className='btn signin-btn'>sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
