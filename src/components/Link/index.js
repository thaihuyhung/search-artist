import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';

const Link = ({ classes, children, className, ...restProps }) => {
  return (
    <a className={classNames(classes.link, className)} {...restProps}>
      {children}
    </a>
  );
};

Link.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.any,
  className: PropTypes.string
};

export default withStyles(styles)(Link);