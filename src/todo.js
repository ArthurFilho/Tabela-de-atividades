import React, { useState } from "react";
import "./Todo.css"
import List from "./list";
import TodoForm from "./TodoForm"
import Item from "./item"

function Todo(){

    const [items, setItems] = useState([]);

function Add(text){

    let item = new Item (text);

    setItems([...items, item])
}
function onItemDeleted(item){

let fillteredItems = items.filter(it => it.id != item.id)
setItems (fillteredItems);
}
 

return(<div className="container">

    <h1> Todo </h1>
    <TodoForm onAddItem={Add} ></TodoForm>
    <List onItemDeleted={onItemDeleted} items={items}></List>
</div> )


}



export default Todo 