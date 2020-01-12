import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logoutAction as logout } from "../../store/actions/auth.action";

function LogoutButton() {
  const dispatch = useDispatch();

  return (
    <button
      onClick={e => {
        e.preventDefault();
        dispatch(logout());
      }}
      className="btn nav-link"
    >
      Logout
    </button>
  );
}

export function Navbar() {
  const user = useSelector(store => store.user);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#!">
          SampleApp
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              {user ? (
                <LogoutButton />
              ) : (
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
