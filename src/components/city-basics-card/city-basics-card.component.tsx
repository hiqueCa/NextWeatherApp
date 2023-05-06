import React from "react";
import styles from "./city-basics-card.module.scss";
import parseTemperatureInCelsius from "../../utils/parse-temperature-in-celsius";

type WeatherConditionType = {
  altText: string | undefined;
  imgUrl: string | undefined;
};

interface ICityBasicsCard {
  cityBasicsData: {
    name: string;
    tempC: string;
    condition: WeatherConditionType;
  };
}

const CityBasicsCard = ({
  cityBasicsData,
}: ICityBasicsCard): React.ReactElement => {
  const formattedTemperature = parseTemperatureInCelsius(cityBasicsData?.tempC);

  return (
    <div className={styles.cityBasicsCard}>
      <div>
        <h2>{cityBasicsData?.name}</h2>
        <h1>{formattedTemperature}</h1>
      </div>

      <img
        alt={cityBasicsData?.condition.altText}
        src={cityBasicsData?.condition.imgUrl}
      />
    </div>
  );
};

export default CityBasicsCard;
