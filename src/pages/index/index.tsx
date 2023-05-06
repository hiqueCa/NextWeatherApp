import React, { useState } from "react";
import SearchBar from "../../components/search-bar/search-bar.component";
import CityBasicsCard from "../../components/city-basics-card/city-basics-card.component";
import styles from "./index.module.scss";

type CityDataType = {
  location: {
    name: string;
  };
  current: {
    temp_c: string;
    condition: {
      text: string;
      icon: string;
    };
  };
};

export default function WeatherApp(): React.ReactElement {
  const [cityData, setCityData] = useState<CityDataType>();

  return (
    <div className={styles.index}>
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
