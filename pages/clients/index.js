import React from "react";
import Link from "next/link";

const clientsData = [
  { id: "baymax", name: "baymax" },
  { id: "Hiro", name: "Hiro" },
  { id: "Honey", name: "Honey" },
];

const index = () => {
  return (
    <div>
      <h1> The clients Page</h1>
      <ul>
        <h4> link with ``</h4>
        {clientsData.map((item) => (
          <li key={item.id}>
            {" "}
            <Link href={`/clients/${item.name}`}>{item.name}</Link>{" "}
          </li>
        ))}

        <h4>Alternative link with object</h4>
        {clientsData.map((item) => (
          <li key={item.id}>
            {" "}
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: item.id },
              }}
            >
              {item.name}
            </Link>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default index;
