import React, { Component } from "react";
import Select from "material-ui/Select";
import { FormControl } from "material-ui/Form";
import { MenuItem } from "material-ui/Menu";

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
  }

  handleDropdown = event => {
    const { callback, state } = this.props;
    callback(event.target.value, state);
  };

  renderDropDowns = list => {
    return list.map((value, index) => (
      <MenuItem key={index} value={value}>
        {value}
      </MenuItem>
    ));
  };

  render() {
    const { value, state, options, fullWidth } = this.props;
    return (
      <FormControl fullWidth={fullWidth}>
        <Select
          value={value}
          onChange={this.handleDropdown}
          inputProps={{
            id: state
          }}
        >
          {this.renderDropDowns(options)}
        </Select>
      </FormControl>
    );
  }
}
