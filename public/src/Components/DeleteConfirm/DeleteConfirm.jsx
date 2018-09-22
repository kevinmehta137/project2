import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';


class DeleteConfirm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      open: false
    }
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    
  };


  handleRemove = jobs => { 
    const url = '/api/jobposts/' + this.props.id;
    console.log("PROPS", this.props.id)
    axios.delete(url)
    .then(res => {
      
      console.log(res)
      
      this.props.onDelete();
    })
    .catch(error => {
      console.log(error);
    })
    this.handleClose();
    window.location.reload();  
    ;
  }
  render() {
    console.log('CLASS COMPNENT', this.props);
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Delete</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Delete Posting"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to delete this posting?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleRemove} color="secondary" autoFocus>
              DELETE
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

DeleteConfirm.propTypes = {
  jobID: PropTypes.string.isRequired
};

export default DeleteConfirm;