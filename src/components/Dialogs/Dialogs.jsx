import React from 'react';
import './Dialogs.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
    return (
        <div className="user-item">
            <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className="messages-item">
            <span className="messages-text">{props.message}</span>
        </div>
    )
}

const Dialogs = (props) => {

    const dialogs = props.messagesPage.dialogData.map( d => <Dialog name={d.name} id={d.id} key={d.id} /> )
    const messages = props.messagesPage.messageData.map( m => <Message message={m.message} key={m.message.length} /> )
    
    return (
        <div className="dialogs">
            <div className="dialogs-wrapper">
                <div className="dialogs-user user">
                   {dialogs}
                </div>
                <div className="dialogs-messages messages">
                    {messages}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;