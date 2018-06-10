import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import styles from './style';

const ArtistEventsSkeleton = ({ classes }) => {
  const events = Array(5).fill(1);
  return (
    <div className={classes.container}>
      <div className={classes.filterWrapper}>
        <div className={classNames(classes.filter, classes.skeleton)} />
        <div className={classNames(classes.filter, classes.skeleton)} />
      </div>
      {
        events.map((event, index) => (
          <div key={index} className={classes.event}>
            <div className={classes.eventInfo}>
              <div className={classes.eventDate}>
                <div className={classNames(classes.eventMonth, classes.skeleton)} />
                <div className={classNames(classes.eventDay, classes.skeleton)} />
                <div className={classNames(classes.eventDayOfWeek, classes.skeleton)} />
              </div>
              <div className={classes.eventVenue}>
                <div className={classNames(classes.eventName, classes.skeleton)} />
                <div className={classNames(classes.eventLocation, classes.skeleton)} />
              </div>
            </div>
            <div className={classes.ticketInfo}>
              <div className={classNames(classes.ticket, classes.skeleton)} />
            </div>
          </div>
        ))
      }
    </div>
  );
};

ArtistEventsSkeleton.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(ArtistEventsSkeleton);