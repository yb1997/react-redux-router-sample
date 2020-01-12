import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export function Protected(props) {
  const user = useSelector(store => store.user);

  return <>{user ? props.children : <Redirect to="/login" />}</>;
}
