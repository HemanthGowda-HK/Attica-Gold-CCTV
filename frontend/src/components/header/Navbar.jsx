import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/attica-gold-company-logo.jpg';
import { useNavigate } from 'react-router-dom';
import { FaRegBell } from 'react-icons/fa';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoMdPower } from 'react-icons/io';
import UserCard from './UserCard'; // Import UserCard component

const Navbar = () => {
  const Navigate = useNavigate();
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleClick = () => {
    localStorage.removeItem('isLoggedIn');
    Navigate('/login');
  };

  const handleUserClick = () => {
    setIsCardOpen(!isCardOpen);
  };

  return (
    <div>
      <div className='navbar'>
        <div className='nav-logo'>
          <img className='attica-logo' src={logo} alt='logo' />
        </div>

        <div className='nav-end'>
          <div className='nav-detail'>
            <FaRegBell className='nav-bell' />

            <div className='nav-user' onClick={handleUserClick}>
              <FaRegUserCircle className='user' />
              <span style={{ fontSize: '14px', cursor: 'pointer' }}>User</span>
            </div>
          </div>
          <div className='nav-logout'>
            <p onClick={handleClick} style={{ cursor: 'pointer' }}>
              <IoMdPower />
            </p>
          </div>
        </div>
      </div>

      {/* Conditionally render the UserCard component based on isCardOpen state */}
      {isCardOpen && <UserCard />}
    </div>
  );
};

export default Navbar;
