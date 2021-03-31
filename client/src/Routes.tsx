import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Bye } from "./pages/Bye";

export const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <header style={{ display: "flex", marginBottom: 10 }}>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div style={{ margin: "0 10px" }}>
            <Link to="/register">Register</Link>
          </div>
          <div>
            <Link to="/login">Login</Link>
          </div>
          <div>
            <Link to="/bye">bye</Link>
          </div>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/bye" component={Bye} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
