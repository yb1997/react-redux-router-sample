import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import { loginAction as login } from "../store/actions/auth.action";

const styles = {
  maxWidth: "420px"
};

function Username(props) {
  return (
    <div className="form-group">
      <input
        className="form-control"
        type="text"
        placeholder="Username"
        name="username"
        value={props.value}
        onChange={e => props.onChange(e.target.value)}
        required
      />
    </div>
  );
}

function Password(props) {
  return (
    <div className="form-group">
      <input
        className="form-control"
        type="password"
        placeholder="Password"
        name="password"
        value={props.value}
        onChange={e => props.onChange(e.target.value)}
        required
      />
    </div>
  );
}

export function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();

  const handleFormSubmit = e => {
    e.preventDefault();
    dispatch(login({ username, password }));
  };

  return (
    <>
      {user ? (
        <Redirect to="/" />
      ) : (
        <>
          <div className="container" style={styles}>
            <div className="row">
              <div className="col mt-5 text-center">
                <h1 className="text-center mb-3">Login</h1>
                <form onSubmit={handleFormSubmit}>
                  <Username value={username} onChange={setUsername} />

                  <Password value={password} onChange={setPassword} />

                  <button className="btn btn-primary" type="submit">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
