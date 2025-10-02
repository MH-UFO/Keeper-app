import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';


function Note(props) {
    const [ifEdit, setEdit] = useState(false)
    const [editSecret, setEditSecret] = useState({
        title: props.title,
        content: props.content
    })

    function checkEdit() {
        setEdit(false)
        console.log(props.id, editSecret.title, editSecret.content)
        props.onEdit(props.id, editSecret.title, editSecret.content)
        
    }

    function editClick() {
        setEdit(true)
    }

    function handleInput(event) {
        const { name, value } = event.target

        setEditSecret(prevValue => {
            if (name === "title") {
                return {
                    title: value,
                    content: prevValue.content
                }
            } else {
                return {
                    title: prevValue.title,
                    content: value
                }
            }
        })
    }

    return (
        ifEdit === false ? <div className="note">
            <EditIcon className="edit-icon" onClick={editClick} />
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <IconButton className="delete-icon" onClick={() => { props.onDelete(props.id) }} aria-label="delete" size="large">
                <DeleteIcon />
            </IconButton>
        </div> : <div className="note">
            <div className="note-edit-container">
                <div className="note-input-container">
                    <input name="title" className="note-input" onChange={handleInput} type="text" value={editSecret.title} />
                    <input name="content" className="note-input" onChange={handleInput} type="text" value={editSecret.content} />
                </div>
                <div className="done-icon-container">
                    <DoneOutlineIcon className="done-icon" onClick={checkEdit} />
                </div>
            </div>
        </div>
    )
}
export default Note