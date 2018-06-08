import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  footer: {
    background: '#2a2a2a',
    color: '#c3c3c3',
    height: 100,
  },
  footerContainer: {
    boxSizing: 'border-box',
    margin: '0 auto',
    maxWidth: 1040,
    width: '100%',
    padding: 24,
  }
}

const Footer = ({ classes }) => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContainer}>
        Thai Huy Hung
      </div>
    </footer>
  );
};

Footer.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Footer);