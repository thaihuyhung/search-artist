import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import styles from './style';

const ArtistDetailSkeleton = ({ classes }) => {
  return (
    <div name="artist-detail-skeleton" className={classes.artistDetailSkeleton}>
      <div>
        <div className={classNames(classes.artistNameMobile, classes.skeleton)} />
        <div className={classNames(classes.artistImage, classes.skeleton)} />
        <div className={classNames(classes.artistSocialPage, classes.skeleton)} />
        <div className={classNames(classes.artistSocialPage, classes.skeleton)} />
      </div>
      <div className={classes.artistInfoContent}>
        <div className={classNames(classes.artistName, classes.skeleton)} />
        <div className={classes.upcomingEvent}>
            <span className={classes.upcomingEventContent}>Upcoming Event</span>
        </div>
      </div>
    </div>
  );
};

ArtistDetailSkeleton.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(ArtistDetailSkeleton);