import React from 'react';
import Header from './Header';

const navLinks = [
  { name: 'HOME', url: '/' },
  { name: 'ABOUT', url: '/about' },
  { name: 'MENU', url: '/menu' },
  { name: 'RESERVATIONS', url: '/reservations' },
  { name: 'ORDER ONLINE', url: '/order' },
  { name: 'LOGIN', url: '/login' },
];

const Nav = () => {
  return (
    <nav>
      <Header />
      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
