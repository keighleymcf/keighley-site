import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Header: React.FC = () => (
  <>
    <div className="headerContainer">
      <Link to="/contact" className="link">
        Contact
        <div className="link-underline" />
      </Link>
      <Link to="/">
        <h1 className="headerName">Keighley McFarland</h1>
      </Link>
      <Link to="/references" className="link">
        References
        <div className="link-underline" />
      </Link>
    </div>
    <div className="mobile-menu">
      <Link to="/contact" className="mobile-link">
        Contact
        <div className="link-underline" />
      </Link>
      <Link to="/references" className="mobile-link">
        References
        <div className="link-underline" />
      </Link>
    </div>
  </>
);

export default Header;
