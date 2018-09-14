import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';


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
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Job Title"
              type="title"
              fullWidth
            />
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

export default PostJob;
