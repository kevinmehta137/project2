import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import axios from 'axios';

const styles = {
    card: {
      minWidth: 275,
      maxWidth: 400,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      marginBottom: 16,
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
};

class CalendarCard extends React.Component  {
   state = {
      showCalendarCard : true,
      dateInfo : {}
    }

    closeCard = () => {
      this.setState({ showCalendarCard: false});
    };

    componentDidMount() {
      // here I make my axios.get call
      axios.get('/api/jobposts/date' )//+ req.body.datatype)
      .then(data => data.json())
      .then(jsonData => {
        this.setState({dateInfo: jsonData})
        console.log(this.setState({dateInfo: jsonData}));
      })
      .catch(function(error){
        console.log(error);
      })
    };

  render () {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;

  return (
      <Card className={classes.card}>
        <CardContent>
          <List style={{fontWeight: 'bold', fontSize: 24}}>Job Type</List>
          <List> {this.state.dateInfo.gig_description}</List>
          <List style={{fontSize: 14}}>Location</List>
          <List> {this.state.dateInfo.gig_location}</List>
          <List style={{fontSize: 14}}>Hours</List>
          <List> {this.state.dateInfo.gig_number_of_hours}</List>
          <List style={{fontSize: 14}}>Number of People</List>
          <List> {this.state.dateInfo.gig_number_of_people}</List>
          <List style={{fontSize: 14}}>Rate</List>
          <List> {this.state.dateInfo.gig_rate}</List>
        </CardContent>
        <CardActions>
          <Button size="small">Edit Posting</Button>
        </CardActions>
        {/* <CardActions>
          <Button onClick={this.closeCard}>Close</Button>
        </CardActions> */}
      </Card>
    );}
}

CalendarCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CalendarCard);
