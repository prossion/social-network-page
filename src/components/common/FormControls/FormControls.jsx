import React from 'react'
import s from './FormControls.module.css'

export const Input = ({input, meta, ...props}) => {

    let hasError = meta.touched && meta.error

    return (
        <div className={s.formControl + " " + ( hasError ? s.error : "") } >
            <div><input type={'text'} {...props} {...input}/></div>
            {hasError && <span className={s.spanError}>{meta.error}</span>}
        </div>
    )
}

