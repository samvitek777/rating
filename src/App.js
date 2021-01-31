import React from 'react';
import './App.css';

function App() {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='img/logo.png'/>
        <p>HEADER пидар</p>
      </header>
      <nav className='nav'>
        <div>2021</div>
        <div>2020</div>
        <div>2019</div>
      </nav>
      <div className='content'>
        MAIN CONTENT
      </div>
      <footer className='footer'><a href='/'>samvitek@gmail.com 2021</a></footer>
    </div>
  );
}

export default App;
