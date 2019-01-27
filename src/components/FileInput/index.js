import React from "react";

const FileInput = () => {
  const handleFileChange = event => {
    const reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(event.target.files[0]);
  };

  const onReaderLoad = event => {
    const openingHoursObj = JSON.parse(event.target.result);
    console.log(openingHoursObj);

    let arr = Object.keys(openingHoursObj).map(key => {
      return {
        day: key,
        data: openingHoursObj[key]
      };
    });

    console.log(arr);
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

export default FileInput;
