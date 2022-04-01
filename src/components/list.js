import React from "react"

import Card from "./card"

function DoneImg(props){
if (props.done) { 
     return(<img alt="done" src="./assets/undone.png"></img>)
}else {
     return(<img alt="undone" src="./assets/done.png"></img>)
};
}

function List(props){
   return( 
   
    <ul>
        
        {props.items.map(item => <li  key={item.id}> 
        
        <Card className={item.done?"done item": "item"}> 
        {item.text}
        <div className="buttons">
       
        <button onClick={()=>{props.onDone(item)}}  ><DoneImg done={item.done}></DoneImg> </button>
        <button onClick={()=>{props.onItemDeleted(item)}}  ><img className="a1" src="./assets/bin.png"></img></button>
       
        </div>
       </Card>
       
       
         </li>)}
     
    </ul>
)
}



export default List