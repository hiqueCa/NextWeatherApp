import React, { useEffect, useState } from "react";
import { fetchCurrentWeather } from "../../free-weather-api-client/free-weather-api-client";

interface ISearchBar {
  onInputChange: (cityData: any) => void;
}

const SearchBar = ({ onInputChange }: ISearchBar): React.ReactElement => {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    if (searchInput !== "") {
      const fetchData = setTimeout(async () => {
        const requestJson = await fetchCurrentWeather(searchInput);
        onInputChange(requestJson);
      }, 2000);

      return () => clearTimeout(fetchData);
    }
  }, [searchInput]);

  return (
    <input
      type="text"
      placeholder="Search for a city here"
      onChange={(event) => setSearchInput(event.target.value)}
      value={searchInput}
    />
  );
};

export default SearchBar;
