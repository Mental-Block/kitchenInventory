import React from "react";
import { NavLink as Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <img src="/images/Logo.svg" />
    </Link>
  );
};

export default Logo;
