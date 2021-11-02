import React from 'react';
import './HeroMessage.css';
const HeroMessage = ({ message, clear }) => {
  return (
    <div>
      <h2>Messages</h2>
      <button className="clear" onClick={clear}>
        Clear messages
      </button>
      <div className="message">
        {message.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    </div>
  );
};
export default HeroMessage;
