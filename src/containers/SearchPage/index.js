import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import { fromJS } from 'immutable';
import { queryArtist } from './action';
import ArtistCard from '../../components/ArtistCard';

const styles = {

}

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: fromJS({
        query: ''
      })
    }
  }

  onChangeSearchQuery = (event) => {
    const value = event.target.value;
    this.setState(({ data }) => ({
      data: data.update('query', () => value)
    }))
  }

  onKeyPress = (event) => {
    if (event.key === 'Enter') {
      const { queryArtist } = this.props;
      const { data } = this.state;
      queryArtist(data.get('query'));
    }
  }

  render() {
    const { data } = this.state;
    const { detail } = this.props;
    return (
      <div>
        <Grid container justify="space-between" alignContent="center" alignItems="center">
          <Input 
            value={data.get('query')} 
            onChange={this.onChangeSearchQuery} 
            onKeyPress={this.onKeyPress} 
          />
        </Grid>
        {detail && <ArtistCard detail={detail} />}
      </div>
    );
  }
}

SearchPage.propTypes = {
  queryArtist: PropTypes.func,
  detail: PropTypes.object,
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