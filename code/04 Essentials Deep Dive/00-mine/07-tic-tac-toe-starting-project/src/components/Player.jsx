import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  
  
  if (isEditing) {
    
  }

  return (
    <li>
      <span className="player">
        <span className="player-name">Player {name}</span>
        <span className="player-symbol">{symbol}</span>
        <button>Edit</button>
      </span>
    </li>
  );
}
