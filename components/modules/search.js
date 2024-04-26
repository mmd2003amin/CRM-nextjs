import React from "react";
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  return (
    <div className="centering justify-between relative w-64 font-regular px-2 bg-slate-600 rounded-lg opacity-80">
      <IoIosSearch className="w-1/12 text-lg" />
      <input
        type="text"
        placeholder="search..."
        className="bg-transparent p-2 w-11/12 outline-none"
      />
    </div>
  );
};

export default Search;
