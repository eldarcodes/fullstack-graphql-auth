import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useLoginMutation } from "./../generated/graphql";

export const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [login] = useLoginMutation();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const response = await login({
      variables: {
        email,
        password,
      },
    });
    history.push("/");

    console.log(response);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">login</button>
    </form>
  );
};
