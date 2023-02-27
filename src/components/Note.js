import React from "react";
import { MdDeleteForever } from "react-icons/md";

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        {/* <button
          data-testid={`deleteBtn${id}`}
          onClick={() => handleDeleteNote(id)}
        >
          Delete
        </button> */}
        <MdDeleteForever
          data-testid={`deleteBtn${id}`}
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
};

export default Note;
