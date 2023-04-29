import React, { useState } from "react";

const SearchBar = (): React.ReactElement => {
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInputChange = (event: React.SyntheticEvent): void => {
    let target = event.target as HTMLInputElement;
    setSearchInput(target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search for a city here"
      onChange={handleSearchInputChange}
      value={searchInput}
    />
  );
};

export default SearchBar;
