import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {

  const [notes, setNotes] = useState([]);
 
  function addNote(newNote){
    console.log(newNote)
    try{

      setNotes(prevValue =>{
        return [ ...prevValue, newNote]
      })
      toast.success("Note added successfully✅", {className:"toasti"});
    }
    catch(err)
    {
      console.log(err)
    }
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((item, index) => index !== id);
    });
  }


  return (
    <div>
      <Header />
      <CreateArea
      onAdd={addNote} 

      />
      
      {notes.map((noteItem,index)=>{
       return <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem .content}
          click={deleteNote}
        />
      })}

      <Footer />
    </div>
  );
}

export default App;
