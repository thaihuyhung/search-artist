import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Inbox as InboxIcon } from '@material-ui/icons';
import EventItem from '../EventItem';
import Filter from '../Filter';
import { format } from 'date-fns';
import { fromJS, List as ImmutableList } from 'immutable';
import MessageBlock from '../MessageBlock';
import styles from './style';
import Skeleton from './skeleton';

class ArtistEvents extends Component {
  state = {
    data: fromJS({
      filterCountries: [],
      filterMonths: []
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { events: curEvents } = this.props;
    const { events: nextEvents } = nextProps;

    const curFilterCountries = this.state.data.get('filterCountries');
    const nextFilterCountries = nextState.data.get('filterCountries');

    const curFilterMonths = this.state.data.get('filterMonths');
    const nextFilterMonths = nextState.data.get('filterMonths');

    return curEvents.size !== nextEvents.size || 
      curFilterCountries.size !== nextFilterCountries.size ||
      curFilterMonths.size !== nextFilterMonths.size;
  }

  onFilterByCountry = (selectedCountries) => {
    this.setState(({ data }) => ({
      data: data.update('filterCountries', () => ImmutableList(selectedCountries))
    }))
  }

  onFilterByMonth = (selectedMonths) => {
    this.setState(({ data }) => ({
      data: data.update('filterMonths', () => ImmutableList(selectedMonths))
    }))
  }


  renderMonthFilterValue = (selected) => {
    return selected.map(item => {
      // Remove the year number if it's current year.
      if (item.split(' ')[1] === (new Date()).getFullYear().toString()) {
        return item.split(' ')[0]
      }
      return item;
    }).join(', ');
  }

  render() {
    const { classes, events, loadingEvents } = this.props;
    const { data } = this.state;
    if (loadingEvents) {
      return <Skeleton />;
    }
    if (events.size === 0) {
      return <MessageBlock icon={<InboxIcon />} content="No events found" />;
    }

    const monthOptions = events
      .map(event => format(event.get('datetime'), 'MMM YYYY'))
      .toSet()
      .toList();

    const countryOptions = events
      .map(event => event.getIn(['venue', 'country']))
      .toSet()
      .toList();

    const filterCountries = data.get('filterCountries');
    const filterMonths = data.get('filterMonths');

    const filteredByMonths = events
      .filter(event => filterMonths.size ? filterMonths.includes(format(event.get('datetime'), 'MMM YYYY')) : event);

    const filteredEvents = filteredByMonths
      .filter(event => filterCountries.size ? filterCountries.includes(event.getIn(['venue', 'country'])) : event)

    return (
      <div className={classes.artistEvents}>
        <Grid classes={{ container: classes.filterWrapper }} container justify="space-between" alignContent="center" alignItems="center">
          <Filter 
            name="filter-by-month"
            className={classes.eventFilter} 
            label="Months" 
            renderValue={this.renderMonthFilterValue}
            options={monthOptions} 
            onClose={this.onFilterByMonth}
          />
          <Filter
            name="filter-by-country"
            className={classes.eventFilter}
            label="Countries"
            options={countryOptions}
            onClose={this.onFilterByCountry}
          />
        </Grid>
        {
          filteredEvents.size ? 
            filteredEvents.map(event => <EventItem key={event.get('id')} event={event} />) : 
            <MessageBlock className={classes.messageBlock} icon={<InboxIcon />} content="No events found for that filter criteria" />
        }
      </div>
    )
  }
}

ArtistEvents.propTypes = {
  events: PropTypes.object,
  loadingEvents: PropTypes.bool,
  classes: PropTypes.object,
};

export default withStyles(styles)(ArtistEvents);