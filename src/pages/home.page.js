import React from "react";
import { useSelector } from "react-redux";

import { Layout } from "./layout.page";

export function HomePage() {
  const user = useSelector(store => store.user);

  return (
    <Layout>
      <>
        <div className="container text-center">
          <h1>Hello, {user ? user.username : "Annonymous User"}</h1>
          <h2>Welcome to Home Page</h2>
        </div>
      </>
    </Layout>
  );
}
