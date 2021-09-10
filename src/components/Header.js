import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FaAlignRight } from 'react-icons/fa';
import Toplogo from '../images/top-logo.png';
//import { BrowserRouter, Router, Switch } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <div className="navbar1">
        <div className="nav-center">
          <div className="nav-header">
            
              <Router>
                <Link smooth to="#home">
                  <img src={Toplogo} alt="LOGO" className="header__nav__logo"/>
                </Link>
              </Router>
              
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            ><FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
            
              <Router>
                <li>
                  <Link smooth to="#home">Home</Link>
                </li>
                <li>
                  <Link smooth to="#about">About</Link>
                </li>
                <li>
                  <Link smooth to="#products">Products</Link>
                </li>
                <li>
                  <Link smooth to="#services">Services</Link>
                </li>

                <li>
                  <Link smooth to="#contact">Contact</Link>
                </li>
              </Router>
            

          </ul>
        </div>
      </div>
    );
  }
}

