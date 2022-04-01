import React , { useState } from "react";


function TodoForm(props){

    const [text, setText] = useState("");


    function handleChange(event){
    
        let t = event.target.value;

        setText(t);
        
    }
    function add(event){
     if(text){   event.preventDefault();
        props.onAddItem(text);
        setText("");
    } }

return(
    <form>
    <input onChange={handleChange} type="text" value={text}></input>
      
    <button onClick={add}>Add</button>
</form>
)

}


export default TodoForm 