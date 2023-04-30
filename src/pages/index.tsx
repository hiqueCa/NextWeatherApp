import React, { useState } from "react";
import SearchBar from "../components/search-bar/search-bar.component";

export default function WeatherApp(): React.ReactElement {
  const [cityData, setCityData] = useState(null);

  return (
    <div>
      <SearchBar onInputChange={(cityData: any) => setCityData(cityData)} />
      <div>{cityData && JSON.stringify(cityData)}</div>
    </div>
  );
}
