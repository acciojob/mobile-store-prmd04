import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/admin">Admin</NavLink>
    </nav>
  );
};
