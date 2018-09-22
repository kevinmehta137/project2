import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

class PostJob extends React.Component {
    state = {
    open: false,
    };

    handleClickOpen = () => {
    this.setState({ open: true });
    };

    handleClose = () => {
    this.setState({ open: false });
    };

    handleChange = name => event => {
    this.setState({ [name]: event.target.value });
    };

    handleSubmit = event => {
      event.preventDefault();
  
      const gig = {
        gig_date: this.state.date,
        gig_description: this.state.title,
        gig_location: this.state.location,
        gig_number_of_hours: this.state.hours,
        gig_number_of_people: this.state.numberPeople,
        gig_rate: this.state.payRate,
        gig_total_pay: this.state.totalPay,
        employerEmployerId: 1,
        employer_id: 1
      };
  
      axios.post(`/api/jobposts`, gig)
      .then((response)=> {
        console.log(response);
        this.props.dayHandler(response);
        //triggers a rerender of ManageJob
        this.props.jobHandler(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      this.handleClose();
      window.location.reload();  
    }

    render () {
    const { classes } = this.props;
    return (
        <div>
        <Button onClick={this.handleClickOpen}> Post A Job </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
        <DialogTitle id="form-dialog-title"> Post A Job </DialogTitle>
        <DialogContent>
            <DialogContentText>
              Please provide information on the new job posting:
            </DialogContentText>
            <Grid container spacing={24}>
            <Grid item xs={12} sm={6}>
            <TextField
              required
              margin="dense"
              label="Job Description"
              type="title"
              fullWidth
              value = {this.state.title}
              onChange = {this.handleChange('title')}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
              required
              margin="dense"
              label="Job Location"
              type="title"
              fullWidth
              value = {this.state.location}
              onChange = {this.handleChange('location')}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
              required
              margin="dense"
              label="# of People"
              type="title"
              fullWidth
              value = {this.state.numberPeople}
              onChange = {this.handleChange('numberPeople')}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
              required
              margin="dense"
              label="Total Pay"
              type="title"
              fullWidth
              value = {this.state.totalPay}
              onChange = {this.handleChange('totalPay')}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
            label="Date"
            type="date"
            defaultValue="2018-09-24"
            className={classes.textField}
            InputLabelProps={{shrink: true,}}
            value = {this.state.date}
            onChange = {this.handleChange('date')}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
            label="Pay Rate"
            type="title"
            className={classes.textField}
            value = {this.state.payRate}
            onChange = {this.handleChange('payRate')}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
            label="# of Hours"
            type="title"
            className={classes.textField}
            value = {this.state.hours}
            onChange = {this.handleChange('hours')}
            />
            </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} type="submit" color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
        </div>
    );
    }
}

PostJob.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostJob);
