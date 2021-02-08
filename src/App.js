import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './Components/IdCard.js';
import Greetings from './Components/Greetings';

function App() {
  return (
    <div className="App">
  <IdCard
        img="https://randomuser.me/api/portraits/men/44.jpg"
        lastName="Doe"
        firstName="John"
        gender="male"
        height="178"
        birth= '1992-07-14'
      />
  <IdCard
        img="https://randomuser.me/api/portraits/women/44.jpg"
        lastName="OBrien"
        firstName="Delores"
        gender="female"
        height='172'
        birth='1988-05-11'
      />
      <Greetings name="Ludwig" lang="de"/>
      <Greetings name="Juan" lang="es"/>
      <Greetings name="John" lang="en"/>
      <Greetings name="François" lang="fr"/>
      <Greetings name="Joon-ho" lang="ko"/>
    </div>
  );
}

export default App;