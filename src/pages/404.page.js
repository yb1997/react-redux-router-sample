import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPage = () => (
  <>
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <h1>Error 404</h1>
      <p>
        Go back to <Link to="/">Home Page</Link>
      </p>
    </div>
  </>
);
