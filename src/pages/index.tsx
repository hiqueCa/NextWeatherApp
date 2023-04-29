import React from "react";
import SearchBar from "../components/search-bar/search-bar.component";

function Header({ title }: { title: string }): React.ReactElement {
  return <h1>{title ? title : "Default title"}</h1>;
}

export default function WeatherApp(): React.ReactElement {
  return (
    <div>
      <SearchBar />
    </div>
  );
}
