import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
    //test
  return (
      <div className='app-wrapper'>
          <Header/>
          <Navigation/>
          <Content/>
          <Footer/>
      </div>
  );
}

export default App;
