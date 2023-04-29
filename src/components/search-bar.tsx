import React, { ChangeEventHandler, useState } from "react";

const SearchBar = (): React.ReactElement => {
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInputChange = (event: React.SyntheticEvent): void => {
    event.preventDefault();

    let target = event.target as HTMLInputElement;
    setSearchInput(target.value);

    console.log(searchInput);
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
