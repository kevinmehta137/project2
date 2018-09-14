import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Calendar from './Components/Calendar/Calendar';
import CalendarCard from './Components/CalendarCard/CalendarCard';
//import Forms from './Components/Forms/Forms';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {/* <Calendar /> */}
        {/* <CalendarCard /> */}
        {/*<Forms />*/}
      </div>
    );
  }
}

export default App;