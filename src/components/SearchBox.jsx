import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBox({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) onSearch(city);
  };

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit"><FiSearch /></button>
    </form>
  );
}
