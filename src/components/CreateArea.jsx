import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Zoom } from '@material-ui/core';

function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title:"",
    content:""
  })

  function handleChange(event){
    const {name, value} = event.target;
    setNote(prevNote =>{
      return {
        ...prevNote,
        [name]:value,
      }
    })
  }

  function submitNote(event){
    props.onAdd(note)

    event.preventDefault()
    return ({
      title: "",
      content: ""
    })
  }
  
  function expand(){
    setExpanded(true)
  }
  return (
    <div>
      <form>
      {isExpanded &&
        (<input onChange={handleChange} name="title" placeholder="Title"  value={note.title}/>)}
        <textarea onChange={handleChange}
         name="content" 
         onClick={expand}
         placeholder="Take a note..." 
         rows={isExpanded? 3: 1} 
         value={note.content} 
         />
        <Zoom in={isExpanded}>
          <button onClick={submitNote}>
           <IoIosAddCircleOutline className="add-btn"/> 
          </button>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
