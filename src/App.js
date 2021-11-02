import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import HeroTag from './Component/HeroTag/HeroTag';
import HeroDetail from './Component/HeroDetail/HeroDetail';
import HeroMessage from './Component/HeroMessage/HeroMessage';
import React from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [heroes, setHeroes] = useState([]);
  const [selecting, setSelecting] = useState({});
  const [message, setMessage] = useState([]);
  const [toggleMessage, setToggleMessage] = useState(true);

  const handleName = (event) => {
    let newHeroes = [...heroes];
    newHeroes.find((hero) => hero.id === selecting.id).name =
      event.target.value;
    setHeroes(newHeroes);
  };

  const clearMessage = () => {
    setToggleMessage(false);
    setMessage([]);
  };
  const handleSelecting = (hero) => {
    setMessage((m) => m.concat([`HeroComponent: Selected hero id=${hero.id}`]));
    setToggleMessage(true);
    setSelecting(hero);
  };
  useEffect(() => {
    let didCancel = false;
    axios({
      method: 'GET',
      url: 'https://60dff0ba6b689e001788c858.mockapi.io/heroes',
    })
      .then((response) => {
        if (!didCancel) {
          setIsLoading(false);
          setHeroes(response.data);
          setMessage((m) => m.concat(['HeroService: fetched heroes']));
        }
      })
      .catch((error) => {
        if (!didCancel) {
          setIsLoading(false);
          setErrorMessage(error.message);
        }
      });

    return () => {
      didCancel = true;
    };
  }, []);
  return (
    <div className="App">
      <h1 className="title">Tour of Heroes</h1>
      <p className="sub-title">My Heroes</p>
      {isLoading && (
        <Loader type="RevolvingDot" color="#2BAD60" height={100} width={100} />
      )}
      {errorMessage && <p>{errorMessage}</p>}
      <div className="hero-list">
        {heroes.map((hero) => (
          <HeroTag
            key={hero.id}
            hero={hero}
            handleSelecting={handleSelecting}
            selecting={selecting}
          />
        ))}
      </div>
      {Object.keys(selecting).length !== 0 && (
        <HeroDetail hero={selecting} handleName={handleName}></HeroDetail>
      )}

      {toggleMessage && (
        <HeroMessage message={message} clear={clearMessage}></HeroMessage>
      )}
    </div>
  );
}

export default App;
