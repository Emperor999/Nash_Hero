import React from 'react';
import './HeroTag.css';

const HeroTag = ({ hero, selecting, handleSelecting }) => {
  return (
    <div
      className={`hero${
        parseInt(selecting.id) === parseInt(hero.id) ? ' selecting' : ''
      }`}
      id={hero.id}
      onClick={() => handleSelecting(hero)}
    >
      <span className="badge">{hero.id}</span>
      <span className="name">{hero.name}</span>
    </div>
  );
};
export default HeroTag;
