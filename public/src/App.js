import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Calendar from './Components/Calendar/Calendar';
import axios from 'axios';
import MainPage from './Components/MainPage/MainPage'

class App extends Component {
  state = {
    selectableDays: []
  }

  dayHandler = newgig => {
    var newDate = this.state.selectableDays.slice();
    newDate.push(JSON.parse(newgig.config.data).gig_date);
    console.log(JSON.parse(newgig.config.data).gig_date);
    this.setState({selectableDays: newDate})
  }

  componentDidMount() {
    axios.get('api/jobposts/date/1')
    .then((response)=>{
      var dates = [];
      for (var i = 0 ; i < response.data.length; i++){
      console.log(response.data[i].gig_date)
      dates.push(response.data[i].gig_date)}
      this.setState({selectableDays: dates})
      console.log(this.state.selectableDays);
    })
    .catch(function(error){
      console.log(error);
    })
  }

  render() {
    return (
      <div className="App">
        {/*<MainPage />*/}
        <Navbar dayHandler = {this.dayHandler}/>
        <Calendar selectableDays = {this.state.selectableDays}/>
        
       
      </div>
    );
  }
}  


export default App;