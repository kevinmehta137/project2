import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Grid from '@material-ui/core/Grid';
import DialogTitle from '@material-ui/core/DialogTitle';
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
      open : false,
      dateInfo : []
    }

    handleClickOpen = () => {
    this.setState({ open: true });
    };

    handleClose = () => {
    this.setState({ open: false });
    };
  
    handleChange = name => event => {
    this.setState({ [name]: event.target.value });
    };

    componentDidMount() {
      // here I make my axios.get call
      axios.get('api/jobposts/id/1/date/2018-09-21')//+ req.body.datatype)
      .then( (response) =>{
        console.log(response.data);
        var info = response.data[0];
        this.setState({dateInfo : info})
      })
      .catch(function(error){
        console.log(error);
      })
    };

  render () {
    const { classes } = this.props;

  return (
    <div>
      <Button onClick={this.handleClickOpen}> Gig </Button>
    <Dialog
    open={this.state.open}
    onClose={this.handleClose}
    aria-labelledby="form-dialog-title"
    >
    <DialogTitle> Gig Info </DialogTitle>
        <DialogContent>
        <Grid container spacing={24}>
            <Grid item md={12}>
          <List style={{fontWeight: 'bold', fontSize: 24}}>Job Type</List>
          <List> {this.state.dateInfo.gig_description}</List>
            </Grid>
            <Grid item md={12}>
          <List style={{fontSize: 14}}>Location</List>
          <List> {this.state.dateInfo.gig_location}</List>
            </Grid>
            <Grid item md={12}>
          <List style={{fontSize: 14}}>Hours</List>
          <List> {this.state.dateInfo.gig_number_of_hours}</List>
            </Grid>
            <Grid item md={12}>
          <List style={{fontSize: 14}}>Number of People</List>
          <List> {this.state.dateInfo.gig_number_of_people}</List>
            </Grid>
            <Grid item md={12}>
          <List style={{fontSize: 14}}>Rate</List>
          <List> {this.state.dateInfo.gig_rate}</List>
          </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose}>Edit Posting</Button>
        </DialogActions>
        <DialogActions>
          <Button onClick={this.handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
      </div>
    );}
}

CalendarCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CalendarCard);
