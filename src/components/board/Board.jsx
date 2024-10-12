import { CiSearch } from "react-icons/ci";
import Note from "../note/Note";
import { useEffect, useState } from "react";
import BoardController from "../bordController/BoardController";
import "./Board.css";

const Board = ({ createNote, noteList, removeNote, addColorNotes, colorNote, colorText }) => {

  const alterSelectColor = () => {
    const color = document.querySelectorAll("#colors_contrainer ul li");
    console.log(color);

    color.forEach((item) => {
      if (item.className == "selected") {
        item.getRootNode;
      }
    });
  };

  return (
    <div className="board">
      <div className="board_nav">
        <BoardController createNote={createNote} addColorNotes={addColorNotes} colorNote={colorNote} />
      </div>
      <div className="board_container">
        <header className="board_header">
          <h2 className="board_title">Notes</h2>
          <div className="search_container">
            <CiSearch className="search_icon" />
            <input className="search_note" type="text" placeholder="Buscar" />
          </div>
        </header>
        <ul className="board_list">
          {noteList.map((item) => (
            <li key={item.id}>
              <Note
                id={item.id}
                text={item.text}
                date={item.createDate}
                colorNote={item.colorNote}
                colorText={item.colorText}
                removeNote={removeNote}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Board;
