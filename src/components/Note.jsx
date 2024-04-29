import React from "react";
import { MdDeleteForever } from "react-icons/md";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={()=> props.click(props.id)}>
        <MdDeleteForever className="add-btn"/>
      </button>
    </div>
  );
}

export default Note;
