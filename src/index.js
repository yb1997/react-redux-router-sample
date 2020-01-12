import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";
import { store } from "./store";
import { Protected } from "./shared/components/protected.component";
import { LoginPage } from "./pages/login.page";
import { HomePage } from "./pages/home.page";
import { AboutUsPage } from "./pages/about-us.page";
import { NotFoundPage } from "./pages/404.page";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>

            <Route exact path="/">
              <Protected>
                <HomePage />
              </Protected>
            </Route>

            <Route path="/about-us">
              <Protected>
                <AboutUsPage />
              </Protected>
            </Route>

            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
