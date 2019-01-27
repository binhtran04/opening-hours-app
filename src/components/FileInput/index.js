import React from "react";
import { connect } from "react-redux";
import { parseHoursJSONData } from "../../actions";
import { formatUnixTime } from "../utils";

const FileInput = props => {
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

    props.parseHoursJSONData(openingHoursObj);
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

export default connect(
  null,
  { parseHoursJSONData }
)(FileInput);
