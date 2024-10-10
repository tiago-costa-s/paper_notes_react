import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import LogoPaperNote from "../logopapernote/LogoPaperNote";
import { useState } from "react";
import "./BoardController.css";

const BoardController = ({ createNote, addColorNotes, colorNote }) => {

  const handleClick = () => {
    createNote();
  };

  // const addColorNotes = () => {
  //   addColorNotes(colorNote);
  // };

  return (
    <div className='board_controller'>
      <LogoPaperNote />

      <button
        className='btn_create_note'
        onClick={() => {
          handleClick();
        }}
      >
        <AiFillPlusCircle id='icon_create_note' />
      </button>

      <div className='colors_container'>
        <div
          className={`circle orange ${colorNote === 'orange' ? 'selected' : ''}`}
          onClick={() => addColorNotes('orange')}>
        </div>
        <div
          className={`circle green ${colorNote === 'green' ? 'selected' : ''}`}
          onClick={() => addColorNotes('green')}>
        </div>
        <div
          className={`circle yellow ${colorNote === 'yellow' ? 'selected' : ''}`}
          onClick={() => addColorNotes('yellow')}>
        </div>
        <div
          className={`circle blue ${colorNote === 'blue' ? 'selected' : ''}`}
          onClick={() => addColorNotes('blue')}>
        </div>
        <div
          className={`circle red ${colorNote === 'red' ? 'selected' : ''}`}
          onClick={() => addColorNotes('red')}>
        </div>
        <div
          className={`circle pink ${colorNote === 'pink' ? 'selected' : ''}`}
          onClick={() => addColorNotes('pink')}>
        </div>
      </div>
      <div className="pencil_container">
        <BsFillPencilFill className='pincel black_pencil' />
        <BsFillPencilFill className='pincel light_blue_pencil' />
        <BsFillPencilFill className='pincel red_pencil' />
      </div>
    </div >
  );
};

export default BoardController;
