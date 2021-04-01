import React from "react";
import { Link } from "react-router-dom";
import { setAccessToken } from "./accessToken";
import { useLogoutMutation, useMeQuery } from "./generated/graphql";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const { data, loading } = useMeQuery({ fetchPolicy: "network-only" });

  const [logout, { client }] = useLogoutMutation();

  return (
    <>
      <header
        style={{
          display: "flex",
          width: 500,
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/register">Register</Link>
        </div>
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/bye">bye</Link>
        </div>
        {data?.me && (
          <div>
            <button
              onClick={async () => {
                await logout();
                setAccessToken("");
                await client.resetStore();
              }}
            >
              logout
            </button>
          </div>
        )}
      </header>
      {loading ? (
        <div>loading...</div>
      ) : data && data.me ? (
        <div style={{ margin: "20px 0" }}>
          you are logged in as {data.me.email}
        </div>
      ) : (
        <div>you are not logged in :(</div>
      )}
    </>
  );
};
