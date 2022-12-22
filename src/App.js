import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import { useState } from "react";

function App() {
  const [note, setNote] = useState([]);

  function add(newNote){
    setNote(oldArray => {
      return [...oldArray, newNote]
    })
    console.log(newNote);
  }

  function remove(id){
    setNote(oldArray => {
      return oldArray.filter((item, index) => {return index !== id})
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onClick={add}/>
      {note.map((item, index) => {
        return (<Note key={index} id={index} title={item.title} content={item.content} onClick={remove}/>)
      })}
      <Footer />
    </div>
  );
}

export default App;
