import { CiSearch } from "react-icons/ci";

import './Board.css'

const Board = () => {

    return (
        <div className='board'>
            <div className="board_nav"></div>
            <div className='board_container'>
                <header className='board_header'>
                    <h2 className='board_title'>Notes</h2>
                    <div className="search_container">
                        <CiSearch className="search_icon"/>
                        <input
                            className='search_note'
                            type="text"
                            placeholder='Buscar'
                        />
                    </div>
                </header>
                <div className='board_list'>
                </div>
            </div>
        </div>
    )

}

export default Board