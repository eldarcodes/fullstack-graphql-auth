import React from "react";
import { Link } from "react-router-dom";
import { useMeQuery } from "./generated/graphql";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const { data } = useMeQuery({ fetchPolicy: "network-only" });

  return (
    <>
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
      {data && data.me ? (
        <div style={{ margin: "20px 0" }}>
          you are logged in as {data.me.email}
        </div>
      ) : (
        <div>you are not logged in :(</div>
      )}
    </>
  );
};
