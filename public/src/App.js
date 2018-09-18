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
<<<<<<< HEAD
        <Calendar />
=======
        <Calendar /> 
>>>>>>> edb4ad6eb93b0057b0e463cb18ac3b2e2adb837d
        {/* <CalendarCard /> */}
       
      </div>
    );
  }
}

export default App;