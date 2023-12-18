import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Navigation() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("access_token") !== null) {
      setIsAuth(true);
    }
  }, [isAuth]);

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem",
    backgroundColor: "#07171e",
    color: "white",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    marginRight: "1rem",
  };

  return (
    <nav style={navStyle}>
      <div>
        <Link to="/" style={linkStyle}>
          JWT Authentication
        </Link>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
      </div>
      <div>
        {isAuth ? (
          <Link to="/logout" style={linkStyle}>
            Logout
          </Link>
        ) : (
          <Link to="/login" style={linkStyle}>
            Login
          </Link>
        )}
        {isAuth && (
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        )}
      </div>
    </nav>
  );
}
