import React, { Component } from 'react';

import Calendar from './components/Calendar';
import Header from '../../components/Header';

class Calendar extends Component {
    render() {
        return (
            <div>  
                <Header />
                <div> This is gonna be the header! </div>
                I am a calendar 
                <Calendar />
            </div>
        )
     }
}

export default Calendar;

   