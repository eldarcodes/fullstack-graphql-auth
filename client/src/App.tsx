import React from "react";
import { gql, useQuery } from "@apollo/client";

function App() {
  const { loading, error, data } = useQuery(gql`
    {
      users {
        email
        id
        tokenVersion
      }
    }
  `);
  if (error) {
    return <div>Something went wrong</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(data);

  return <div>hello</div>;
}

export default App;
