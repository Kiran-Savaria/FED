import React from 'react';

const navLinks = [
  { name: 'Home', url: '/' },
  { name: 'Menu', url: '/menu' },
  { name: 'Reservations', url: '/reservations' },
  { name: 'Order Online', url: '/order' },
  { name: 'About', url: '/about' },
  { name: 'Login', url: '/login' },
  { name: 'Contact', url: '/contact' }
];

const Nav = () => {
  return (
    <nav>
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
