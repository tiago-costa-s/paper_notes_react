import { IoIosCloseCircle } from "react-icons/io";
import { BsFillPinAngleFill } from "react-icons/bs";
import { useState } from "react";

import "./Note.css";

const Note = ({ id, text, date, colorNote, colorText, removeNote, fixed }) => {

  return (
    <div className={`note ${colorNote}`}>
      <div className="note_body">
        <IoIosCloseCircle
          className="icon_closed"
          onClick={() => removeNote(id)}
        />
        <textarea
          maxLength={135}
          name=""
          id=""
          placeholder="Adicione um texto..."
        // value={text}
        ></textarea>
      </div>
      <div className="note_footer">
        <p className="note_date">
          <span>{date}</span>
        </p>
        <BsFillPinAngleFill className="icon_pin" />
      </div>
    </div>
  );
};

export default Note;
