import React, {useEffect, useState} from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status)
    }, [props.status] )

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={s.status}>
            {!editMode &&
            <div className={s.spanBlock}>
                <span onDoubleClick={activateEditMode} className={s.span}>{props.status || "Status "}</span>
            </div>
            }
            {editMode &&
            <div className={s.inputBlock}>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deActivateEditMode} className={s.input}
                       value={status}/>
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;

