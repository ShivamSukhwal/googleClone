import React from "react";

const Form = () => {
  return (
    <form autoComplete="off">
      <input id="note-title" placeholder="Title" type="text"></input>
      <input id="note-text" placeholder="Take A note" type="text"></input>
      <div>
        <button type="submit" id="submit-button">
          Submit
        </button>
        <button type="button" id="form-close-button">
          Close
        </button>
      </div>
    </form>
  );
};

export default Form;
