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
          className={`circle peach ${colorNote === 'peach' ? 'selected' : ''}`}
          onClick={() => addColorNotes('peach')}>
        </div>
        <div
          className={`circle mint_green ${colorNote === 'mint_green' ? 'selected' : ''}`}
          onClick={() => addColorNotes('mint_green')}>
        </div>
        <div
          className={`circle pale_yellow ${colorNote === 'pale_yellow' ? 'selected' : ''}`}
          onClick={() => addColorNotes('pale_yellow')}>
        </div>
        <div
          className={`circle light_sky_blue ${colorNote === 'light_sky_blue' ? 'selected' : ''}`}
          onClick={() => addColorNotes('light_sky_blue')}>
        </div>
        <div
          className={`circle light_coral ${colorNote === 'light_coral' ? 'selected' : ''}`}
          onClick={() => addColorNotes('light_coral')}>
        </div>
        <div
          className={`circle lavender_pink ${colorNote === 'lavender_pink' ? 'selected' : ''}`}
          onClick={() => addColorNotes('lavender_pink')}>
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
