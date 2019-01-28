import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getJsonFromInput } from "../../actions";

export const FileInput = props => {
  const handleFileChange = event => {
    const reader = new FileReader();
    reader.onload = onReaderLoad;
    if (event.target.files[0]) {
      reader.readAsText(event.target.files[0]);
    }
  };

  // event handler for FileReader onload
  const onReaderLoad = event => {
    const openingHoursObj = JSON.parse(event.target.result);

    props.getJsonFromInput(openingHoursObj);
  };

  return (
    <div>
      <label htmlFor="file">Choose a JSON file</label>
      <input
        type="file"
        id="file"
        name="file"
        accept="application/json"
        onChange={handleFileChange}
      />
    </div>
  );
};

FileInput.propTypes = {
  getJsonFromInput: PropTypes.func
};

export default connect(
  null,
  { getJsonFromInput }
)(FileInput);
