import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import avatar from './../../assets/images/avatar.png'

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialogItem}>
            <div className={s.dialog + ' ' + s.active}>
                <img className={s.img} src={avatar}/>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default DialogItem;