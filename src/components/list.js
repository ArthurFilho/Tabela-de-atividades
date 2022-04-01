import React from "react"


import ListItem from "./Listitem"


function List(props){
   return( 
   
    <ul>
        
        {props.items.map(item => <ListItem key={item.id} item={item} onDone={props.onDone} onItemDeleted={props.onItemDeleted}  ></ListItem> )}
     
    </ul>
)
}



export default List