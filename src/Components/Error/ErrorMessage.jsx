import React from "react";
import { useCounter } from "../../Context/AppContext";

export default function ErrorMessage() {
  const { errorMessage } = useCounter();
  return <h1 className="text-center text-2xl">{errorMessage}</h1>;
}
