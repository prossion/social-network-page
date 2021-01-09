import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsReduxForm} from './DialogsForm'

const Dialogs = (props) => {

    let state = props.messagesPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>)

    const onSubmit = (formData) => {
        props.addMessage(formData.newMessageText)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <DialogsReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


export default Dialogs;