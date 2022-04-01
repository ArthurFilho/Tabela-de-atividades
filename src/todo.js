import React, { useEffect, useState } from "react";
import "./Todo.css"
import List from "./components/list";
import TodoForm from "./components/TodoForm"
import Item from "./components/item"

const SAVED_ITEMS = "savedItems"


function Todo(){

    const [items, setItems] = useState([]);

useEffect(()=>{
let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
if(savedItems){
setItems(savedItems);
}
}, [])

useEffect(()=>{
localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
}, [items])

function Add(text){

    let item = new Item (text);

    setItems([...items, item])
}
function onItemDeleted(item){

let fillteredItems = items.filter(it => it.id != item.id)
setItems (fillteredItems);
}


function onDone(item){

let updatedItems = items.map(it=>{
    if(it.id === item.id){
        it.done = !it.done;
    }
return it;
})
setItems(updatedItems);
}
 

return(<div className="container">

    <h1> Todo </h1>
    <TodoForm onAddItem={Add} ></TodoForm>
    <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
</div> )


}



export default Todo 