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
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

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
              id="name"
              label="Job Title"
              type="title"
              fullWidth
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
              required
              margin="dense"
              id="location"
              label="Job Location"
              type="title"
              fullWidth
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
              required
              margin="dense"
              id="poolSize"
              label="# of People"
              type="title"
              fullWidth
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
              required
              margin="dense"
              id="workType"
              label="Type of Work"
              type="title"
              fullWidth
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
            id="date"
            label="Date"
            type="date"
            defaultValue="2018-09-24"
            className={classes.textField}
            InputLabelProps={{shrink: true,}}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
            id="time"
            label="Time"
            type="time"
            defaultValue="07:30"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="rate-native-simple">Rate of Pay  </InputLabel>
            <Select
              margin="dense"
              native
              value={this.state.age}
              onChange={this.handleChange('rate')}
              inputProps={{
                name: 'Rate',
                id: 'payRate',
              }}
            >
            <option value="" />
            <option value={'daily'}>All Day</option>
            <option value={'hourly'}>Hourly</option>
          </Select>            
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
              required
              margin="dense"
              id="amount"
              label="Amount or Rate"
              type="title"
              fullWidth
            />
            </Grid>            
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Sumbit
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
