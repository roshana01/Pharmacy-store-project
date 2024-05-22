import React, { useEffect, useState } from "react";
import ChildServes from "./ChildServes";
import { useCounter } from "../../../Context/AppContext";

export default function Services() {
  const { servesData } = useCounter();
  return (
    <div className="grid grid-cols-4  place-content-around pl-16">
      {servesData?.map((item) => (
        <ChildServes
          icon={item.icon}
          title={item.title}
          description={item.description}
          key={item.id}
        />
      ))}
    </div>
  );
}
