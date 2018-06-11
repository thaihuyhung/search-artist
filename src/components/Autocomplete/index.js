import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TextField, Paper, LinearProgress } from '@material-ui/core';
import Downshift from 'downshift';
import styles from './style';

class Autocomplete extends Component {

  handleOnChange = (selectedItem) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(selectedItem);
    }
  }
  renderMessage = (loading) => {
    const { classes } = this.props;
    return (
      <div className={classes.autocompleteLoading}>
        {loading && <LinearProgress classes={{root: classes.autocompleteLoadingIndicator}} />}
        <div className={classes.autocompleteLoadingText}>
          {loading ? 'Searching ...' : 'No results found'}
        </div>
      </div>
    )
  }

  renderItems = (inputValue, getItemProps, selectedItem, highlightedIndex) => {
    const { getItems, renderItem, getSelectedText } = this.props;
    const items = getItems(inputValue);
    if (!items || (!items.length && !items.size)) {
      return this.renderMessage(false);
    }
    return items.map((suggestion, index) =>
      renderItem({
        suggestion,
        index,
        itemProps: getItemProps({ 
          name: 'suggestion-item',
          item: getSelectedText(suggestion) 
        }),
        highlightedIndex,
        selectedItem,
      })
    )
  }

  renderDropdown = (isOpen, inputValue, getItemProps, selectedItem, highlightedIndex) => {
    const { loading } = this.props;
    if (isOpen) {
      return (
        <Paper square>
          {
            loading ? this.renderMessage(true) : 
            this.renderItems(inputValue, getItemProps, selectedItem, highlightedIndex)
          }
        </Paper>
      )
    }
  }


  render() {
    const { classes, className, inputProps, onInputValueChange } = this.props;
    return (
      <Downshift onInputValueChange={onInputValueChange} onChange={this.handleOnChange}>
        {({ getInputProps, getItemProps, isOpen, inputValue, selectedItem, highlightedIndex }) => (
          <div className={className}>
            <TextField 
              fullWidth
              classes={{root: classes.autocompleteInput}} 
              {...getInputProps(inputProps)} 
            />
            {this.renderDropdown(isOpen, inputValue, getItemProps, selectedItem, highlightedIndex)}
          </div>
        )}
      </Downshift>
    );
  }
}

Autocomplete.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  getItems: PropTypes.func.isRequired,
  renderItem: PropTypes.func.isRequired,
  onInputValueChange: PropTypes.func.isRequired,
  getSelectedText: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  loading: PropTypes.bool,
  inputProps: PropTypes.object,
};

export default withStyles(styles)(Autocomplete);