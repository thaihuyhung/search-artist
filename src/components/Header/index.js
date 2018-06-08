import React from 'react';
import PropTypes from 'prop-types';
import { ImmutableLoadingBar as LoadingBar } from 'react-redux-loading-bar';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  toolbar: {
    margin: '0 auto',
    maxWidth: 1040,
    width: '100%',
    boxSizing: 'border-box'
  },
  loadingBar: {
    backgroundColor: '#ffc500',
    height: 3,
    position: 'absolute'
  }
}

const Header = ({ classes }) => {
  return (
    <AppBar position="fixed">
      <LoadingBar className={classes.loadingBar} />
      <Toolbar classes={{ root: classes.toolbar }}>
        <Typography variant="title" color="inherit">
          SEARCH ARTIST
          </Typography>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Header);