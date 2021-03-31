import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useUsersQuery } from "./generated/graphql";

function App() {
  const { loading, error, data } = useUsersQuery();
  if (error) {
    return <div>Something went wrong</div>;
  }

  if (loading || !data) {
    return <div>Loading...</div>;
  }

  console.log(data);

  return <div>{JSON.stringify(data.users)}</div>;
}

export default App;
