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

  defaultRenderValue = (selected) => selected.join(', ');

  render() {
    const { options, label, className, renderValue, name } = this.props;
    const { value } = this.state;
    return (
      <FormControl className={className} name={name}>
          <InputLabel>{label}</InputLabel>
          <Select
            name={`${name}-select`}
            multiple
            value={value}
            onChange={this.handleChange}
            input={<Input />}
            MenuProps={{
              onExit: this.handleClose,
              name: name + '-menu'
            }}
            renderValue={renderValue ? renderValue : this.defaultRenderValue}
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
  options: PropTypes.object.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  onClose: PropTypes.func,
  renderValue: PropTypes.func,
};

export default withStyles(styles)(Filter);