import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { queryArtist } from './action';

const styles = {

}

class SearchPage extends Component {
  render() {
    return (
      <div>
        Search Page
      </div>
    );
  }
}

const mapStateToProps = state => ({
  detail: state.getIn(['search', 'detail']),
  loading: state.getIn(['search', 'loading']),
})

const mapDispatchToProps = {
  queryArtist
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
  withStyles(styles)
)(SearchPage);