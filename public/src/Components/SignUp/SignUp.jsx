import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

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

class SignUp extends React.Component {
    state = {
    open: false,
    };

    handleClickOpenSignUp = () => {
    this.setState({ open: true });
    };

    handleCloseSignUp = () => {
    this.setState({ open: false });
    };

    handleChangeSignUp = name => event => {
    this.setState({ [name]: event.target.value });
    };

    handleClickOpenCalendar = () => {
    this.setState({ open: true });
    };

    render () {
    return (
        <div>
        <Button onClick={this.handleClickOpenSignUp}> SignUp </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleCloseSignUp}
          aria-labelledby="form-dialog-title"
        >
        <DialogTitle id="form-dialog-title"> Create An Employer Account </DialogTitle>
        <DialogContent>
            <Grid container spacing={24}>
            <Grid item xs={12} sm={6}>
            <TextField
              required
              margin="dense"
              id="employer_name"
              label="Employer Name"
              type="title"
              fullWidth
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
              required
              margin="dense"
              id="employer_email"
              label="Email"
              type="title"
              fullWidth
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
              required
              margin="dense"
              id="employer_password"
              label="Password"
              type="title"
              fullWidth
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
              required
              margin="dense"
              id="employer_confirmpassword"
              label="Confirm Password"
              type="title"
              fullWidth
            />
            </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseSignUp} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleCloseSignUp} color="primary">
              Sumbit
            </Button>
          </DialogActions>
        </Dialog>
        </div>
    );
    }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUp);