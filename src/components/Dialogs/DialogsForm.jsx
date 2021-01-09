import React from 'react';
import s from './Dialogs.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../Utils/Validators";
import {Input} from "../common/FormControls/FormControls";

const maxLength = maxLengthCreator(80)

const DialogsForm = (props) => {
    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <div className={s.inputDiv}><Field component={Input} name={'newMessageText'}
                                               placeholder={'Write message!'} className={s.input}
                                               validate={[required, maxLength]}></Field></div>
            <div>
                <button className={s.button}>Sent</button>
            </div>
        </form>
    )
}
export const DialogsReduxForm = reduxForm({form: 'dialogs'})(DialogsForm)

export default DialogsForm;