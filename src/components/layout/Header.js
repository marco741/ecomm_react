import React from "react";
import {Link} from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header__container">
        <div className="header__logo">
          <Link to="/ecomm_react/">E-COMMERCE</Link>
        </div>
        <div className="header__menu">
          <Link to="/ecomm_react/">Home</Link>
          <Link to="/ecomm_react/shop">Shop</Link>
          <Link to="/ecomm_react/carrello">Carrello</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
