import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Hidden } from '@material-ui/core';
import { Inbox as InboxIcon } from '@material-ui/icons';
import Image from '../Image';
import styles from './style';
import classNames from 'classnames';
import ArtistEvents from '../ArtistEvents';
import bitFist from '../../assets/bitFist.svg';
import bitText from '../../assets/bitText.svg';
import facebook from '../../assets/facebook.svg';
import Link from '../Link';
import url from 'wurl';
import Skeleton from './skeleton';
import MessageBlock from '../MessageBlock';

const ArtistDetail = ({ className, classes, detail, loadingDetail, events, loadingEvents, initialLoad }) => {
  if (initialLoad) {
    // TODO initial load
    return null;
  }
  if (loadingDetail) {
    return <Skeleton />;
  }
  if (!detail) {
    return <MessageBlock icon={<InboxIcon />} content="No data found for this artist" height={400} />;
  }
  const name = detail.get('name');
  const imageUrl = detail.get('image_url');
  const bandsintownUrl = detail.get('url');
  const facebookUrl = detail.get('facebook_page_url');
  return (
    <section className={classNames(className, classes.artistInfo)}>
        <Hidden smUp>
          <Typography classes={{ root: classes.artistName }} variant="display1" gutterBottom align="center">
            {name}
          </Typography>
        </Hidden>
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
          <Hidden xsDown>
            <Typography classes={{ root: classes.artistName }} variant="display1" gutterBottom>
              {name}
            </Typography>
          </Hidden>
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