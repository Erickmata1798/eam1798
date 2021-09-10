import React, { Component } from 'react';
import './CSS/App.scss'
import './CSS/Home.scss'
import './CSS/Header.scss'
import './CSS/About.scss'
import './CSS/Products.scss'
import './CSS/Services.scss'
import './CSS/Contact.scss'
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Contact from './components/Contact';


class App extends Component {
  
  render() {
    return (
      <>
      <Header/>
      <Home/>
      <About/>
      <Products/>
      <Services/>
      <Contact/>
      </>
    );
  }
}

export default App;
