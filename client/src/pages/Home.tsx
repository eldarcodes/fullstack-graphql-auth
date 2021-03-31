import React from "react";
import { Link } from "react-router-dom";
import { useUsersQuery } from "../generated/graphql";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  const { data, loading, error } = useUsersQuery({
    fetchPolicy: "network-only",
  });

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <div>Users</div>
      <ul>
        {data?.users.map((user) => (
          <li key={user.id}>
            {user.email} ({user.id})
          </li>
        ))}
      </ul>
    </div>
  );
};
