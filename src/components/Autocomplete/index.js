import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TextField, Paper, LinearProgress } from '@material-ui/core';
import { fromJS } from 'immutable';
import Downshift from 'downshift';
import styles from './style';

class Autocomplete extends Component {
  state = {
    data: fromJS({
      isFocused: false,
      searchHistory: fromJS(JSON.parse(localStorage.getItem('SEARCH_HISTORY') || "[]"))
    })
  }

  handleOnChange = (selectedItem) => {
    const { onChange } = this.props;
    if (onChange) {
      const { data } = this.state;
      const searchHistory = data.get('searchHistory');

      const existIndex = searchHistory.findIndex(x => x.get('name') === selectedItem.get('name'));
      const removeDuplicated = existIndex > -1 ? searchHistory.remove(existIndex) : searchHistory;
      const newSearchHistory = removeDuplicated.unshift(selectedItem).take(5);
      this.setState(({ data }) => ({
        data: data.update('searchHistory', () => newSearchHistory)
      }));
      localStorage.setItem('SEARCH_HISTORY', JSON.stringify(newSearchHistory.toJSON()));
      onChange(selectedItem);
    }
  }

  clearHistory = (event) => {
    event.stopPropagation();
    localStorage.setItem('SEARCH_HISTORY', "[]");
    this.setState(({ data }) => ({
      data: data.update('searchHistory', () => fromJS([]))
    }));
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
    const { getItems, renderItem } = this.props;
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
          item: suggestion
        }),
        highlightedIndex,
        selectedItem,
      })
    )
  }

  renderDropdown = (isOpen, inputValue, getItemProps, selectedItem, highlightedIndex) => {
    const { data } = this.state;
    const { loading, renderItem, classes } = this.props;
    if (!inputValue && data.get('isFocused')) {
      const searchHistory = data.get('searchHistory');
      if (searchHistory && searchHistory.size) {
        return (
          <Paper square>
            <div className={classes.searchHistoryWrapper}>
              <div className={classes.searchHistoryLabel}>Search history</div>
              <a className={classes.clearHistory} onMouseDown={this.clearHistory}>CLEAR</a>
            </div>
            {searchHistory.map((suggestion, index) => renderItem({
              suggestion, 
              index, 
              itemProps: getItemProps({ 
                name: 'suggestion-item',
                item: suggestion
              })
            }))}
          </Paper>
        )
      }
    }
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

  handleInputFocus = () => {
    this.setState(({ data}) => ({
        data: data.update('isFocused', () => true)
    }));
  }

  handleInputBlur = () => {
    this.setState(({ data}) => ({
      data: data.update('isFocused', () => false)
  }));
  }

  render() {
    const { classes, className, inputProps, onInputValueChange, getSelectedText } = this.props;
    return (
      <Downshift 
        onInputValueChange={onInputValueChange} 
        onChange={this.handleOnChange} 
        // onSelect={this.handleOnSelect}
        itemToString={getSelectedText}
        onOuterClick={this.handleOuterClick}
      >
        {({ getInputProps, getItemProps, isOpen, inputValue, selectedItem, highlightedIndex }) => (
          <div className={className}>
            <TextField 
              fullWidth
              classes={{root: classes.autocompleteInput}} 
              {
                ...getInputProps({
                  ...inputProps,
                  onFocus: this.handleInputFocus,
                  onBlur: this.handleInputBlur,
                })
              } 
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