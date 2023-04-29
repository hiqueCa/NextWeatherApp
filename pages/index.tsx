import React from "react";
import { useState } from "react";

function Header({ title }: { title: string }): React.ReactElement {
  return <h1>{title ? title : "Default title"}</h1>;
}

export default function HomePage(): React.ReactElement {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];
  const [likes, setLikes] = useState<number>(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}
