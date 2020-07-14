import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Header = () => {
  return (
    <div className='headerContainer'>
      <Link to='/contact' className='link'>
        Contact
      </Link>
      <h1 className='headerName'>Keighley McFarland</h1>
      <Link to='/references' className='link'>
        References
      </Link>
    </div>
  );
};

export default Header;
