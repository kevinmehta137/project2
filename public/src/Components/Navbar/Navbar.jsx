import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import PostJob from '../PostJob/PostJob';
import ManageJob from '../ManageJob/ManageJob';
import Gig_Finder_Logo from './images/Gig_Finder_Logo.jpg';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 5rem',
  },
  List: {
    padding: '1rem'
  },
};

class Navbar extends React.Component {
    state = { drawerIsOpen: false,
    jobs: []
    }

    newJobHandler = newgig => {
      console.log('Handling Job');
      var newJob = this.state.jobs.slice();
      newJob.push(JSON.parse(newgig.config.data));
      console.log(JSON.parse(newgig.config.data));
      this.setState({jobs: newJob})
    }
    
  handleDrawerOpen = () => {
    this.setState({ drawerIsOpen: true });
  };

  handleDrawerClose = () => {
    this.setState({ drawerIsOpen: false });
  };

  componentDidMount() {
    this.getJobs();
  };
 
  getJobs () {
    axios.get('/api/manageposts/1/')
    .then ( (response) =>{
      console.log(response.data) 
        var jobData = response.data;
        this.setState({jobs: jobData})
      })
    
    .catch(function(error){
      console.log(error);
    })
  }

  render () {
      const { classes } = this.props;
  
      return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <Grid item xs={6}>
          <IconButton onClick={this.handleDrawerOpen} className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
        </Grid>
        <Grid container spacing={24} 
            direction="column"
            alignItems="center"
            justify="center">
        <Grid item xs={12}>
          <img src={Gig_Finder_Logo} alt='Gig_Finder_Logo' height="80" />
        </Grid>
        </Grid>
        <Grid item xs={6} justify='right'>
          
        </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
          variant="persistent"
          classes={{
            paper: classes.drawerPaper,
          }}
          open={this.state.drawerIsOpen}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ExitToApp />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.drawerInner}>
            <List> <PostJob dayHandler = {this.props.dayHandler} jobHandler = {this.newJobHandler}/>  </List>
            <List> <ManageJob getJobs = {this.state.jobs} dayHandler = {this.props.dayHandler}/>  </List>
            <Button color="inherit"> Logout </Button>
          </div>
        </Drawer>
    </div>
    );
    }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);