import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Header = () => {
  return (
    <div className='headerContainer'>
      <Link to='/contact' className='link'>
        Contact
        <div className="link-underline"></div>
      </Link>
      <Link to='/'>
        <h1 className='headerName'>Keighley McFarland</h1>
      </Link>
      <Link to='/references' className='link'>
        References
        <div className="link-underline"></div>
      </Link>
    </div>
    
  );
};

export default Header;
