import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(event) {
        const {name, value} = event.target;
        setNote(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    function handleSubmit(event){
        props.onClick(note);
        event.preventDefault();
        setNote({title: "", content: ""});
    }
   
    return (
        <div>
            <form className="create-note">
                {isExpanded && <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>}
                
                <textarea onClick={() => {setExpanded(true)}} onChange={handleChange} name="content" placeholder="Take a note ..." value={note.content} rows={isExpanded ? 3 : 1}/>

                <Zoom in={isExpanded}>
                    <Fab onClick={handleSubmit}><AddIcon /></Fab>
                </Zoom>
            </form>
        </div>
    )
}
export default CreateArea;
