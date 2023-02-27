import React, { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const charLimit = 200;

  const handleChange = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    if (charLimit - e.target.value.length > -1) {
      setNoteText(e.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="8"
        placeholder="Type here to enter a new note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{charLimit - noteText.length} Remaining</small>
        <button
          onClick={handleSaveClick}
          disabled={noteText.length < 1}
          className="save"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
