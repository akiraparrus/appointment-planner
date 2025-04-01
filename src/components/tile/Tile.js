import React from 'react';

function Tile({ name, description }) {
  return (
    <div className="tile">
      <p className="tile-title">{name}</p>
      {Object.entries(description).map(([key, value]) => (
        key !== 'name' && (
          <p key={key} className="tile">
            {key}: {value}
          </p>
        )
      ))}
    </div>
  );
}

export default Tile; 