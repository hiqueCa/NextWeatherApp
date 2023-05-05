import React, { Fragment } from "react";

type WeatherConditionType = {
  altText: string;
  imgUrl: string;
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
  return (
    <Fragment>
      <div>
        <h2>{cityBasicsData?.name}</h2>
        <h1>{cityBasicsData?.tempC}</h1>
      </div>

      <img
        alt={cityBasicsData?.condition.altText}
        src={cityBasicsData?.condition.imgUrl}
      />
    </Fragment>
  );
};

export default CityBasicsCard;
