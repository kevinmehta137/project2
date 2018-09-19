import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import DeleteConfirm from '../DeleteConfirm/DeleteConfirm'
import axios from 'axios';


const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class ManageJob extends React.Component {
  state = {
    open: false,
    jobs: []
  };

  
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

//axios call to get data from the database and populate the manage jobs list
  componentDidMount() {
    axios.get('api/manageposts/:employer_id/' )
    .then(data => data.json())
    .then(jsonData => {
      this.setState({jobs: jsonData})
      console.log(this.setState({jobs: jsonData}));
    })
    .catch(function(error){
      console.log(error);
    })
  };


  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Manage Jobs</Button>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                Edit or Close A Listing
              </Typography>
              <Button color="inherit" onClick={this.handleClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <List>

            {/* this is where the data is being rendered */}

            <ListItem button>
              <ListItemText 
               primary= 
               {this.state.jobs.gig_description}
               secondary= 
               {this.state.jobs.gig_date} />
              <DeleteConfirm />
              <Button>Edit</Button>
              <Button>Close</Button>
            </ListItem>
            <Divider />
          
          </List>
        </Dialog>
      </div>
    );
  }
}

ManageJob.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ManageJob);