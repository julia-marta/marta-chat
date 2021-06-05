import React from 'react';
import logo from '../../logo.svg';
import './header.css';

const Header = () => {

  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="logo" />
      <h1 className="header__title">#ChatWithMarta</h1>
      <img src={logo} className="header__logo header__logo--bottom" alt="logo" />
    </header>
  );
}

export default Header;
