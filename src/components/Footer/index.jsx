import React from 'react';
import style from './style.module.css';
const Footer = ({ theme, toggle }) => {
  return (
    <footer className={`${style.footer}  ${theme ? 'theme-dark' : 'theme-light'}`}>
      <div className="container">
        <div className={style.logo}>Anduy1712 @ github/anduy1712</div>
      </div>
    </footer>
  );
};

export default Footer;
