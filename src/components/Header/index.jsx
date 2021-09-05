import React from 'react';
import { useState } from 'react';
import { FiSun, FiBarChart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import header from './style.module.css';
const Header = ({ theme, toggle }) => {
  // setdarkTheme(theme);
  const toggleTheme = () => {
    toggle();
  };
  return (
    <header
      className={`${header.header} ${theme ? 'theme-dark' : 'theme-light'}`}
    >
      <div className="container">
        <div className={header.inside}>
          <FiBarChart className={header.logo__icon} />
          <Link to="/" className={header.logo}>
            World <span>Ranks</span>
          </Link>
          <FiSun className={header.logo__icon} onClick={toggleTheme} />
        </div>
      </div>
    </header>
  );
};

export default Header;
