import React from 'react';
import k from'./Messages.module.css';


const Messages = () => {

let dialogsData = [
    {id: 1, name: 'A'},
    {id: 2, name: 'B'},
    {id: 3, name: 'C'},
    {id: 4, name: 'D'},
    {id: 5, name: 'E'},
]

let messagesData = [
    {id: 1, messsage: 'hello'},
    {id: 2, messsage: 'ola'},
    {id: 3, messsage: 'hey'},
    {id: 4, messsage: 'hi'},
]

    return ( <Messages className={k.item}>
       <div className={k.dialogsItems}>
<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
<DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
       </div>
</Messages>
    )
    }
export default Messages;