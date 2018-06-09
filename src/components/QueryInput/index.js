import React, { Component } from 'react';
import { InputAdornment, MenuItem, Tooltip, Avatar } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import styles from './style';
import Autocomplete from '../Autocomplete';
import defaultAvatar from '../../assets/default-avatar.jpg';

class QueryInput extends Component {
  onSelectArtist = (selectedArtist) => {
    const { queryArtist } = this.props;
    if (selectedArtist) {
      queryArtist(selectedArtist);
    }
  }

  onInputValueChange = (inputValue) => {
    const { queryArtistName } = this.props;
    if (inputValue) {
      queryArtistName(inputValue);
    }
  }

  getSelectedText = (suggestion) => suggestion.get('name');

  getArtists = () => {
    const { artistSuggestions } = this.props;
    return artistSuggestions;
  }

  renderArtist = ({ index, suggestion, itemProps }) => {
    const { classes } = this.props;
    const name = suggestion.get('name');
    const avatar = suggestion.get('imageSrc') || defaultAvatar;
    const isVerified = !!suggestion.get('verifiedSrc');
    return (
      <MenuItem key={index} {...itemProps}>
        <Avatar alt={name} src={avatar} />
        <span className={classes.artistName}>{name}</span>
        {isVerified &&
          <Tooltip title="Verified Source" placement="bottom">
            <sup>
              <CheckCircleIcon className={classes.verifiedIcon} />
            </sup>
          </Tooltip>
        }
      </MenuItem>
    )
  }

  render() {
    const { className, loadingSuggestions } = this.props;
    const inputProps = {
      label: 'Search an artist',
      InputProps: {
        startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
      }
    };
    return (
      <Autocomplete
        className={className}
        inputProps={inputProps}
        onInputValueChange={this.onInputValueChange}
        getItems={this.getArtists}
        renderItem={this.renderArtist}
        getSelectedText={this.getSelectedText}
        loading={loadingSuggestions}
        onChange={this.onSelectArtist}
      />
    );
  }
}

QueryInput.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  queryArtist: PropTypes.func.isRequired,
  queryArtistName: PropTypes.func.isRequired,
  artistSuggestions: PropTypes.object.isRequired,
  loadingSuggestions: PropTypes.bool.isRequired,
};

export default withStyles(styles)(QueryInput);