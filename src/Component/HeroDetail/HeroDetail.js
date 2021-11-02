import React from 'react';

const HeroDetail = ({ hero, handleName }) => {
  const heroName = hero.name.toUpperCase();
  return (
    <div className="hero-detail">
      <p className="sub-title">{heroName} Details</p>
      <div className="hero-detail-details">
        <p>id: {hero.id}</p>
        <div>
          <label htmlFor="hero-name">Hero name:</label>
          <input
            id="hero-name"
            type="text"
            value={hero.name}
            onChange={handleName}
          />
        </div>
      </div>
    </div>
  );
};
export default HeroDetail;
