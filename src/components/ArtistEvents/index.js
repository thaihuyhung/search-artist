import React from 'react';
import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import ReactList from 'react-list';
import EventItem from '../EventItem';

const ArtistEvents = ({ events, loadingEvents }) => {
  if (loadingEvents) {
    // TODO Event Loading Skeleton;
    return <div>Loading...</div>;
  }
  if (events.size === 0) {
    // TODO No Event found
    return <div>No Event Found</div>;
  }

  const renderItem = index => <EventItem key={events.getIn([index, 'id'])} event={events.get(index)} />

  return (
    <ReactList
      itemRenderer={renderItem}
      length={events.size}
    />
  )
};

ArtistEvents.propTypes = {
  events: PropTypes.object,
  loadingEvents: PropTypes.bool,
};

export default ArtistEvents;