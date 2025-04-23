import React from 'react';
import Header from './Header';
import { Routes, Route, Link } from 'react-router-dom';
import Main from './Main';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
// import Homepage from './Homepage';
// import About from './About';
// import Menu from './Menu';
// import Reservations from './Reservations';
// import Order from './Order';
// import Login from './Login';

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
    <>
      <nav>
        <Header />
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.url}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/menu" element={<Menu />} /> */}
        {/* <Route path="/reservations" element={<BookingPage />} /> */}
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        {/* <Route path="/order" element={<Order />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </>
  );
};

export default Nav;
