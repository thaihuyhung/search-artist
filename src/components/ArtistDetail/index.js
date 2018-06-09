import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Image from '../Image';
import styles from './style';
import classNames from 'classnames';
import ArtistEvents from '../ArtistEvents';

const ArtistDetail = ({ className, classes, detail, loadingDetail, events, loadingEvents, initialLoad }) => {
  if (initialLoad) {
    // TODO initial load
    return null;
  }
  if (loadingDetail) {
    // TODO Artist Loading Skeleton;
    return <div>Loading...</div>;
  }
  if (!detail) {
    // TODO Empty Artist Info
    return <div>No Artist Found</div>;
  }
  const name = detail.get('name');
  const imageUrl = detail.get('image_url');
  // const bandsintownUrl = detail.get('url');
  // TODO fix bandsintown link, it has to download to local file
  return (
    <section className={classNames(className, classes.artistInfo)}>
        <div>
          <Image className={classes.artistImage} src={imageUrl} />
          {/* {
            bandsintownUrl &&
            <a href={bandsintownUrl} target="_blank">
              <img src="https://assets.bandsintown.com/images/bitFist.svg" alt="Bandsintown Fist" />
              <img src="https://assets.bandsintown.com/images/bitText.svg" alt="Bandsintown Text" />
            </a>
          } */}
        </div>
        <div className={classes.artistInfoContent}>
          <Typography classes={{ root: classes.artistName }} variant="display1" gutterBottom>
            {name}
          </Typography>
          <div className={classes.upcomingEvent}>
            <span className={classes.upcomingEventContent}>Upcoming Event</span>
          </div>
          <ArtistEvents events={events} loadingEvents={loadingEvents} />
        </div>
      </section>
  );
};

ArtistDetail.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  detail: PropTypes.object,
  loadingDetail: PropTypes.bool,
  events: PropTypes.object,
  loadingEvents: PropTypes.bool,
  initialLoad: PropTypes.bool,
};

export default withStyles(styles)(ArtistDetail);