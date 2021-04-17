import React from "react";
import { useRouter } from "next/router";

//http://localhost:3000/blog/2020/12
const slug = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>Blog</h1>
    </div>
  );
};

export default slug;
