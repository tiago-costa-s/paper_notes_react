import { IoIosCloseCircle } from "react-icons/io";
import { BsFillPinAngleFill } from "react-icons/bs";

import './Note.css'

const Note = () => {

    return (
        <div className='note'>
            <div className="note_body">
                <IoIosCloseCircle className='icon_closed' />
                <textarea
                    maxLength={135}
                    name=""
                    id=""
                    placeholder='Adicione um texto...'
                ></textarea>
            </div>
            <div className="note_footer">
                <p className='note_date'>10/08/24</p>
                <BsFillPinAngleFill className='icon_pin' />
            </div>
        </div>
    )

};

export default Note;