import React from "react";

import { Navbar } from "../shared/components/navbar.component";
import { Footer } from "../shared/components/footer.component";

export const Layout = props => (
  <>
    <Navbar />

    <main className="container-fluid">{props.children}</main>

    <Footer />
  </>
);
