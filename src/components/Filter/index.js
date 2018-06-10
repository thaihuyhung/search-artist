import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText, Input } from '@material-ui/core';
import styles from './style';
 
class Filter extends Component {
  constructor(props) {
    super(props);
    // Material UI Select doesn't support immutable props
    this.state = {
      value: []
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });

  }

  handleClose = () => {
    const { onClose } = this.props;
    const { value } = this.state;
    if (onClose) {
      onClose(value);
    }
  }

  render() {
    const { options, label, className, renderValue } = this.props;
    const { value } = this.state;
    return (
      <FormControl className={className}>
          <InputLabel>{label}</InputLabel>
          <Select
            multiple
            value={value}
            onChange={this.handleChange}
            input={<Input />}
            MenuProps={{
              onExit: this.handleClose
            }}
            renderValue={selected => renderValue ? renderValue(selected) : selected.join(', ')}
          >
            {options.map(option => (
              <MenuItem key={option} value={option}>
                <Checkbox checked={value.indexOf(option) > -1} />
                <ListItemText primary={option} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
    );
  }
}

Filter.propTypes = {
  options: PropTypes.object,
  label: PropTypes.string,
  className: PropTypes.string,
  onClose: PropTypes.func,
  renderValue: PropTypes.func,
};

export default withStyles(styles)(Filter);