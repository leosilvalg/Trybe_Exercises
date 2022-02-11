import './App.css';
import React from 'react';
import Header from './header.jsx';
import Pokedex from './pokedex.jsx';

function App() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen sm:bg-cover md:bg-cover lg:bg-cover xl:bg-contain bg-[url('https://i.pinimg.com/originals/d3/88/57/d38857eeb3ff01be07c05fbfa80d3385.png')]">
      <Header />
      <Pokedex />
    </div>
  );
}

export default App;
