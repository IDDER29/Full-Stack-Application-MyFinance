import React, { useState } from "react";
import { FaBell, FaCaretDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Perform search logic here
  };

  return (
    <header className="flex items-center justify-between bg-white p-4 shadow-md rounded-2xl">
      <div className="flex items-center w-1/2 gap-2">
        <IoSearch size={30} />
        <input
          type="text"
          placeholder="Hi Name, click here to search..."
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>
      <div className="flex items-center space-x-4">
        <FaBell size={24} className="text-gray-600" />
        <div className="flex items-center">
          <span className="text-gray-700">Idder AIT</span>
          <FaCaretDown size={24} className="text-gray-600 ml-2" />
        </div>
      </div>
    </header>
  );
};

export default SearchBar;
