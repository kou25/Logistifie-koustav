"use client";
import React, { useState } from "react";

export const SearchBar = ({ onSearch }: { onSearch: (e: string) => void }) => {
  const [value, setValue] = useState("");
  return (
    <input
      type="text"
      className="w-80 p-2 text-sm rounded-md text-black"
      placeholder="Search Blogs..."
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        onSearch(e.target.value);
      }}
    />
  );
};
