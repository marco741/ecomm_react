import React from "react";
import {Link} from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">E-COMMERCE</Link>
        </div>
        <div className="header__menu">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/carrello">Carrello</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
