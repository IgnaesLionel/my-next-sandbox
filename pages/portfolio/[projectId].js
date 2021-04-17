import React from "react";
import { useRouter } from "next/router";

const projectId = () => {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h1>Portfolio Project Page</h1>
    </div>
  );
};

export default projectId;
