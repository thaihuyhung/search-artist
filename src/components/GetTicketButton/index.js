import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import styles from './style';

const GetTicketButton = ({ classes, className, src, ...restProps }) => {
  return (
    <button className={classNames(classes.getTicketButton, className)} {...restProps}>
      <a href={src} target="_blank">GET TICKET</a>
    </button>
  );
};

GetTicketButton.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  src: PropTypes.string,
};

export default withStyles(styles)(GetTicketButton);