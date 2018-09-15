import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Calendar from './Components/Calendar/Calendar';
import CalendarCard from './Components/CalendarCard/CalendarCard';
import MainPage from './Components/MainPage/MainPage';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<MainPage />*/}
        <Navbar />
        <Calendar /> 
        {/* <CalendarCard /> */}
        {/*<Forms />*/}
      </div>
    );
  }
}

export default App;