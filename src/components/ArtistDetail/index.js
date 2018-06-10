import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Image from '../Image';
import styles from './style';
import classNames from 'classnames';
import ArtistEvents from '../ArtistEvents';
import bitFist from '../../assets/bitFist.svg';
import bitText from '../../assets/bitText.svg';
import facebook from '../../assets/facebook.svg';
import Link from '../Link';
import url from 'wurl';

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
  const bandsintownUrl = detail.get('url');
  const facebookUrl = detail.get('facebook_page_url');
  return (
    <section className={classNames(className, classes.artistInfo)}>
        <div>
          <Image className={classes.artistImage} src={imageUrl} />
          {
            bandsintownUrl &&
            <Link className={classes.bandsintown} href={bandsintownUrl} target="_blank">
              <img src={bitFist} alt="Bandsintown Fist" />
              <img src={bitText} alt="Bandsintown Text" />
            </Link>
          }
          {
            facebookUrl &&
            <Link className={classes.facebookPage} href={facebookUrl}>
              <img src={facebook} alt={name} />
              <span>{url('path', facebookUrl)}</span>
            </Link>
          }
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