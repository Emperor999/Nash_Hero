import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import './App.css';

export default function App() {
  const [heroes, setHeroes] = useState([]);
  const [id, setId] = useState('');
  const [heroName, setHeroName] = useState('');
  const [message, setMessage] = useState('');
  const [details, setdetaiils] = useState('');
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(
          'https://60dff0ba6b689e001788c858.mockapi.io/heroes'
        );
        const data = res.data;
        console.log(data);
        setHeroes(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPost();
  }, []);
  return (
    <div className="App">
      {heroes.map((hero, index) => (
        <div>
          <ul className="heroes">
            <li
              className="li"
              key={index}
              onClick={() => {
                setdetaiils(' details');
                setId(hero.id);
                setHeroName(hero.name);
                setMessage(
                  (previousMes) =>
                    previousMes +
                    `HeroesComponent: Selected hero id=${hero.id}\n`
                );
              }}
            >
              <span className="badge">{hero.id}</span> {hero.name}
            </li>
          </ul>
        </div>
      ))}
      <br />
      <h3>
        {heroName.toUpperCase()}
        {details}
      </h3>
      <div>id : {id}</div>
      Hero Name : <input type="text" defaultValue={heroName} />
      <br />
      <button onClick={() => setMessage('')}>Clear message</button>
      <h1 style={{ color: 'red' }}>Message</h1>
      <h2>
        {message.split('\n').map((mes, index) => (
          <p key={index}>{mes}</p>
        ))}
      </h2>
    </div>
  );
}
