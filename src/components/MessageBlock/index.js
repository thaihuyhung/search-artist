import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import styles from './style';

const MessageBlock = ({ classes, className, content, icon, height }) => {
  return (
    <Grid 
      container 
      classes={{container: classes.messageBlock}} 
      justify="center" 
      alignContent="center" 
      alignItems="center"
      style={{ height: `${height}px`}}
      name="message-box"
      className={className}
    >
      {icon}
      <div name="message-box-content" className={classes.message}>{content}</div>
    </Grid>
  );
};

MessageBlock.propTypes = {
  classes: PropTypes.object,
  content: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.object,
  height: PropTypes.number
};

MessageBlock.defaultProps = {
  height: 200
}

export default withStyles(styles)(MessageBlock);