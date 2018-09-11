import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';

const styles = {
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
};

class Sidebar extends React.Component {
    state = {
      right: false,
    };
  
    toggleDrawer = (side, open) => () => {
      this.setState({
        [side]: open,
      });
    };
  
    render() {
      const { classes } = this.props;
  
      const sideList = (
        <div className={classes.list}>
          <List>{mailFolderListItems}</List>
          <Divider />
          <List>{otherMailFolderListItems}</List>
        </div>
      );
  
      const fullList = (
        <div className={classes.fullList}>
          <List>{mailFolderListItems}</List>
          <Divider />
          <List>{otherMailFolderListItems}</List>
        </div>
      );
  
      return (
        <div>
          <Button onClick={this.toggleDrawer('right', true)}>Open Right</Button>          

          <SwipeableDrawer
            anchor="right"
            open={this.state.right}
            onClose={this.toggleDrawer('right', false)}
            onOpen={this.toggleDrawer('right', true)}
          >
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer('right', false)}
              onKeyDown={this.toggleDrawer('right', false)}
            >
              {sideList}
            </div>
          </SwipeableDrawer>
        </div>
      );
    }
}
  
SwipeableTemporaryDrawer.propTypes = {
classes: PropTypes.object.isRequired,
};
  
export default Sidebar;