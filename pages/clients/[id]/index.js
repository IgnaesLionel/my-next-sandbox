import React from "react";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();

  function loadProjectHandler() {
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "projectA" },
    });
  }

  return (
    <div>
      <h1>The projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default index;
