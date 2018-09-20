import React from "react";
import dateFns from "date-fns";
import axios from 'axios';
import CalendarCard from '../CalendarCard/CalendarCard';

class Calendar extends React.Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date(),
    selectableDays: [],
    //showCalendarCard: false,
  };
/*
  res.json([4, 20])
*/
  
  componentDidMount() {
    // here I make my axios.get call
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
  };

  renderHeader() {
    const dateFormat = "MMMM YYYY";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = "dddd";
    const days = [];

    let startDate = dateFns.startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  }

  /* renderCalendarCard = () => {
    if (this.state.showCalendarCard) {
      return (<div>
        <CalendarCard />
      </div>);// This will be your calendar card component
    } else {
      return '';// This will stay as return empty string
    }
  } */

  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = "D";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        if( this.state.selectableDays.indexOf(dateFns.format(day, 'YYYY-MM-DD')) !== -1){
          {days.push(
            <div
              className={`col cell ${
                !dateFns.isSameMonth(day, monthStart)
                  ? "disabled"
                  : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
              }`}
              datatype = {dateFns.format(day, 'YYYY-MM-DD')}
              key={day}
              onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
            >
              <span className="number">{formattedDate}</span>
              <span className="bg">{formattedDate}</span>
              <CalendarCard date={dateFns.format(day, 'YYYY-MM-DD')}/>
            </div>
          )}
        }
        else
        {days.push(
          <div
            className={`col cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            datatype = {dateFns.format(day, 'YYYY-MM-DD')}
            key={day}
            onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
          </div>
        )};
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  onDateClick = date => {
    this.setState({
      selectedDate: date
    }, () => {
      var day = dateFns.format(date, 'YYYY-MM-DD')
      if (this.state.selectableDays == day) {
        this.setState({showCalendarCard: true})
        console.log("I am a clickable day")
      } else {
        console.log("Date is: " + day)
        
      }
    });
  };

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };

  render() {
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    );
  }
}

export default Calendar;