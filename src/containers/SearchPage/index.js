import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { queryArtist, queryArtistName } from './action';
import styles from './style';
import QueryInput from '../../components/QueryInput';
import ArtistDetail from '../../components/ArtistDetail';

export class SearchPage extends Component {
  render() {
    const { 
      classes,
      queryArtist,
      detail, 
      events, 
      loadingDetail, 
      loadingEvents, 
      queryArtistName,
      artistSuggestions,
      loadingSuggestions,
      initialLoad,
    } = this.props;
    return (
      <div>
        <QueryInput 
          className={classes.searchInput} 
          queryArtist={queryArtist} 
          queryArtistName={queryArtistName}
          artistSuggestions={artistSuggestions}
          loadingSuggestions={loadingSuggestions}
        />
        <ArtistDetail 
          initialLoad={initialLoad}
          detail={detail} 
          events={events} 
          loadingDetail={loadingDetail} 
          loadingEvents={loadingEvents} 
        />
      </div>
    );
  }
}

SearchPage.propTypes = {
  classes: PropTypes.object.isRequired,
  queryArtist: PropTypes.func,
  detail: PropTypes.object,
  loadingDetail: PropTypes.bool,
  events: PropTypes.object,
  loadingEvents: PropTypes.bool,
  queryArtistName: PropTypes.func,
  artistSuggestions: PropTypes.object,
  loadingSuggestions: PropTypes.bool,
  initialLoad: PropTypes.bool,
}

const mapStateToProps = state => ({
  detail: state.getIn(['search', 'detail']),
  loadingDetail: state.getIn(['search', 'loadingDetail']),
  events: state.getIn(['search', 'events']),
  loadingEvents: state.getIn(['search', 'loadingEvents']),
  artistSuggestions: state.getIn(['search', 'artistSuggestions']),
  loadingSuggestions: state.getIn(['search', 'loadingSuggestions']),
  initialLoad: state.getIn(['search', 'initialLoad']),
})

const mapDispatchToProps = {
  queryArtist,
  queryArtistName
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
  withStyles(styles)
)(SearchPage);