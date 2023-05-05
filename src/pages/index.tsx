import React, { useState } from "react";
import SearchBar from "../components/search-bar/search-bar.component";
import CityBasicsCard from "../components/city-basics-card/city-basics-card.component";

export default function WeatherApp(): React.ReactElement {
  const [cityData, setCityData] = useState(null);

  console.log(cityData);

  return (
    <div>
      <SearchBar onInputChange={(cityData: any) => setCityData(cityData)} />
      <CityBasicsCard
        cityBasicsData={{
          name: cityData?.location.name ?? "",
          tempC: cityData?.current.temp_c ?? "",
          condition: {
            altText: cityData?.current.condition.text,
            imgUrl: cityData?.current.condition.icon,
          },
        }}
      />
      <div>{cityData && JSON.stringify(cityData)}</div>
    </div>
  );
}
