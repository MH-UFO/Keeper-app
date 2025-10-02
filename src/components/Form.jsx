import React, { useState } from "react"
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';



function Form(props) {
    const [secret, setSecret] = useState({
        title: "",
        content: "",
        id: ""
    })
    const [inputFocus, setInputFocus] = useState(false)
    function handleInputFocus() {
        setInputFocus(true)
    }
    function handleInput(event) {
        const { name, value } = event.target;
        setSecret(prevValue => {
            return {
                ...prevValue,
                [name]: value,
                id: new Date().getTime()
            }
        })

    }

    function formSubmit(event) {
        event.preventDefault();
        props.onSubmit(secret)
        setSecret({
            title: "",
            content: "",
            id: ""
        })

    }
    return (
        <form className="create-note" onSubmit={formSubmit} >
            <input
                type="text"
                name="title"
                value={secret.title}
                onChange={handleInput}
                placeholder={inputFocus == true?  "Write the title of your secret":"Write a secret"}
                required
                onFocus={handleInputFocus} />
            {inputFocus == true ? <textarea
                type="text"
                name="content"
                value={secret.content}
                onChange={handleInput}
                placeholder="Write the content of your secret"
                rows="3"
                required
                maxLength="150"></textarea> : null}
            {inputFocus && <p className="char-counter">{150 - secret.content.length} characters remaining</p>}

            <Zoom in={inputFocus}>
                <div className="fab-container">
                    <Fab className="Fab" type="submit" size="small"><AddIcon /></Fab>
                </div>
            </Zoom>
        </form>
    )
}

export default Form