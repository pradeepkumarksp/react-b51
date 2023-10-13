import React from "react";

function Note({note}){
    return(
        // <li>{note.important ? note.content + '*' : note.content}</li>

        <li>
            {note.content} { note.important && "*"}
        </li>
    )
}

export default Note;