import React from "react";
import { NavLink } from "react-router-dom";
import { clearLocalStorage } from "../utils/common";

function Header() {
  return (
    <div className="headerDiv">
      {localStorage.getItem("user-info") ? (
        <div className="mainDiv">
          <div>
            <NavLink to="/add">
              <span>Add Products</span>
            </NavLink>
            <NavLink to="/update">
              <span>Update Products</span>
            </NavLink>
          </div>
          <div>
            <NavLink to="/login" onClick={() => clearLocalStorage()}>
              <span>Logout</span>
            </NavLink>
          </div>
        </div>
      ) : (
        <>
          <NavLink to="/login">
            <span>Login</span>
          </NavLink>
          <NavLink to="/register">
            <span>Register</span>
          </NavLink>
        </>
      )}
    </div>
  );
}

export default Header;
