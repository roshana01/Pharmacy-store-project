import React from "react";
import { useCounter } from "../../Context/AppContext";

export default function SearchBar() {
  const { query, setQuery } = useCounter();
  const submitHandler = (e) => {
    e.preventDefault();
    setQuery("");
  };

  return (
    <form className="join" onSubmit={submitHandler}>
      <input
        className="input input-bordered join-item w-[450px]"
        placeholder="Enter your keyboard..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn join-item rounded-r-lg bg-blue-500 text-white">
        Search
      </button>
    </form>
  );
}
