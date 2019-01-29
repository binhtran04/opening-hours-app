import React, { Component } from "react";
import PropTypes from "prop-types";
import "./FileInput.css";
import { getDayIndex } from "../../utils";

import { connect } from "react-redux";
import { getJsonFromInput } from "../../actions";

export class FileInput extends Component {
  state = {
    inputError: false
  };

  handleFileChange = event => {
    const reader = new FileReader();
    reader.onload = this.onReaderLoad;
    if (event.target.files[0]) {
      reader.readAsText(event.target.files[0]);
    }
  };

  // event handler for FileReader onload
  onReaderLoad = event => {
    const openingHoursObj = JSON.parse(event.target.result);

    if (this.isValidOpeningHoursJson(openingHoursObj)) {
      this.props.getJsonFromInput(openingHoursObj);
      this.setState({ inputError: false });
    } else {
      this.props.getJsonFromInput(false);
      this.setState({ inputError: true });
    }
  };

  isValidOpeningHoursJson = inputObj => {
    let valid = true;
    Object.keys(inputObj).forEach(key => {
      // key has to be a day of week
      // and obj has to have valid hours array
      valid = valid && getDayIndex(key) <= 7 && Array.isArray(inputObj[key]);
    });

    return valid;
  };

  render() {
    return (
      <div className="fileinput">
        <label htmlFor="file">Choose a JSON file</label>
        <input
          type="file"
          id="file"
          name="file"
          accept="application/json"
          onChange={this.handleFileChange}
        />
        {this.state.inputError && (
          <div className="fileinput__error">Invalid opening hours JSON</div>
        )}
      </div>
    );
  }
}

FileInput.propTypes = {
  getJsonFromInput: PropTypes.func
};

export default connect(
  null,
  { getJsonFromInput }
)(FileInput);
