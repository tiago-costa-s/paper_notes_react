import { useEffect, useState } from 'react';
import Board from './components/board/Board';
import './App.css';

function App() {
  const [noteList, setNoteList] = useState([]);
  const [colorNote, setColorNote] = useState('peach');

  // carregar a lista do localStorage quando o componente for montado
  useEffect(() => {
    const getListLocalStorage = JSON.parse(localStorage.getItem('noteList'));
    // verifique se a lista armazenada existe antes de definir o estado
    if (getListLocalStorage) {
      setNoteList(getListLocalStorage);
    }
  }, []);

  // define a cor da nota
  const addColorNotes = (color) => {
    setColorNote(color);
  };

  // define a cor da caneta
  const addColorText = () => { };

  // cria uma nota
  const createNotes = () => {
    const newNote = {
      id: generateId(),
      text: '',
      createDate: generatedCreationDate(),
      colorNote: colorNote,
      colorText: 'red_note',
      fixed: false
    };

    const updatedNotes = [...noteList, newNote];

    setNoteList(updatedNotes);
    localStorage.setItem('noteList', JSON.stringify(updatedNotes));

    console.log(newNote)
  };

  // gera id da nota
  const generateId = () => {
    return Math.floor(Math.random() * 1000);
  };

  // cria data de criação
  const generatedCreationDate = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${day}/${month}/${year}`;
  };
  // console.log(generatedCreationDate());

  // remover note
  const removeNote = (id) => {
    const updatedNotes = noteList.filter((item) => item.id !== id);
    setNoteList(updatedNotes);
    localStorage.setItem('noteList', JSON.stringify(updatedNotes));
    console.log('Remove Item')
  };

  // fixar nota no board
  const fixedNote = () => {
    console.log('Fixar Nota' + item.id);
  };

  return (
    <div className="app">
      <Board
        createNote={createNotes}
        noteList={noteList}
        removeNote={removeNote}
        addColorNotes={addColorNotes}
        colorNote={colorNote}
      />
    </div>
  );
}
export default App;
