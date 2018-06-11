

import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';
import { Typography, Tooltip, Grid } from '@material-ui/core';
import FlagIcon from '../FlagIcon';
import countries from 'country-list';
import Link from '../../components/Link';
import GetTicketButton from '../../components/GetTicketButton';

const EventItem = ({ event, classes }) => {
  const eventName = event.get('description') || event.getIn(['lineup', 0]) || 'TBA';
  const datetime = event.get('datetime');
  const city = event.getIn(['venue', 'city']);
  const region = event.getIn(['venue', 'region']);
  const country = event.getIn(['venue', 'country']);
  const venue = event.getIn(['venue', 'name']);
  const address = region ? [venue, city, region].join(', ') : [venue, city].join(', ');

  const googleMapUrl = `https://maps.google.com/?q=${address}`;

  const offers = event.get('offers');
  const ticket = offers.find(offer => offer.get('type') === 'Tickets' && offer.get('status') === 'available');
  const bookTicketUrl = ticket ? ticket.get('url') : '';
  return (
    <Grid name="event-item" className={classes.event} container justify="space-between" alignContent="center" alignItems="center">
      <div className={classes.eventInfo}>
        <div className={classes.eventDate}>
          <div className={classes.eventMonth}>{format(datetime, 'MMM').toUpperCase()}</div>
          <div className={classes.eventDay}>{format(datetime, 'DD')}</div>
          <div className={classes.eventDayOfWeek}>{format(datetime, 'dddd')}</div>
        </div>
        <div className={classes.eventVenue}>
          <Tooltip title={eventName} placement="bottom">
            <Typography classes={{ root: classes.eventName }} variant="title" gutterBottom>{eventName}</Typography>
          </Tooltip>
          <div>
            <Tooltip title={country} placement="bottom">
              <span>
                <FlagIcon code={countries().getCode(country).toLowerCase()} />
              </span>
            </Tooltip>
            <Link className={classes.eventLocation} href={googleMapUrl} target="_blank">
              {address}
            </Link>
          </div>
        </div>
      </div>
      {
        bookTicketUrl &&
        <div className={classes.ticketInfo}>
          <GetTicketButton src={bookTicketUrl} />
        </div>
      }
    </Grid>
  );
};

EventItem.propTypes = {
  event: PropTypes.object,
  classes: PropTypes.object,
}

export default withStyles(styles)(EventItem);