import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import PostJob from '../PostJob/PostJob';
import ManageJob from '../ManageJob/ManageJob';

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
    state = { drawerIsOpen: false }

  handleDrawerOpen = () => {
    this.setState({ drawerIsOpen: true });
  };

  handleDrawerClose = () => {
    this.setState({ drawerIsOpen: false });
  };


  render () {
      const { classes } = this.props;
  
      return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={this.handleDrawerOpen} className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.grow}>
            The Gig Finder
          </Typography>
          <Button /*onClick={this.handleDrawerOpen}*/ color="inherit"> Logout </Button>
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
            <List> <PostJob />  </List>
            {/* <List><Button color="inherit"> Post a Job </Button></List> */}
            <List> <ManageJob />  </List>
            {/* <List><Button color="inherit"> Manage Job Posts </Button></List> */}
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