import React from 'react';
import Tile from '../tile/Tile';

function TileList({ tiles }) {
  return (
    <div className="tile-list">
      {tiles.map((tile, index) => (
        <Tile
          key={index}
          name={tile.name}
          description={tile}
        />
      ))}
    </div>
  );
}

export default TileList; 