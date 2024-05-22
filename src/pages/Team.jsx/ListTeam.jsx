import React from "react";
import ItemTeam from "./ItemTeam";
import { useCounter } from "../../Context/AppContext";

export default function ListTeam() {
  const { team } = useCounter();
  return (
    <div className="flex justify-around items-center mt-16  bg-gray-50 py-12">
      {team.map((item) => (
        <div key={item.id}>
          <ItemTeam item={item} />
        </div>
      ))}
    </div>
  );
}
