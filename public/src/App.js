import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Calendar from "./pages/Calendar/components/Calendar";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <header>
          <div id="logo">
            <span className="icon">date_range</span>
            <span>
              react<b>calendar</b>
            </span>
          </div>
        </header>
        <main>
          <Calendar />
        </main>
      </div>
      </Router>
    );
  }
}

export default App;
