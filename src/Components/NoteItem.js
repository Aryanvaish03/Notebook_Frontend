import React, { useContext }from 'react'
import NoteContext from '../Context/Notes/NoteContext';

function NoteItem(props) {
    const { note, updateNote } = props;
    const context = useContext(NoteContext);
    const { deleteNote } = context;
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    {/* <div className="d-flex align-items-center"></div> */}
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style ={{ left: '85%', zIndex:'1'}}>
                        {note.tag}
                    </span>
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description} </p>
                    <i className="fa-solid fa-trash mx-2" onClick={() => {deleteNote(note._id)}}></i>
                    <i className="fa-solid fa-pen-to-square mx-2" onClick={() => {updateNote(note)}}></i>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
