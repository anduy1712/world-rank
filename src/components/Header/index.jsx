import React from 'react';
import { FiSun, FiBarChart } from 'react-icons/fi';
import header from './style.module.css';
const Header = () => {
  return (
    <header className={header.header}>
      <div className="container">
        <div className={header.logo}>
          <FiBarChart className={header.logo__icon} />
          World <span>Ranks</span>
          <FiSun className={header.logo__icon} />
        </div>
      </div>
    </header>
  );
};

export default Header;
