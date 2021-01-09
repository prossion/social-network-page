import React from "react";
import s from "./ProfileInfo.module.css";
import {Input} from "../../common/FormControls/FormControls";
import {Field, reduxForm} from "redux-form";

const ProfileDataForm = ({handleSubmit, profile, error}) => {

    return <form onSubmit={handleSubmit}>
        <div className={s.name}><Field component={Input} name={"fullName"}
                                       className={s.fullName} placeholder={'edit you name'}/></div>
        <div className={s.about}><Field component={Input} name={"aboutMe"}
                                        className={s.aboutMe} placeholder={'tell us about yourself'}/></div>
        <div><Field component={Input} name={"lookingForAJobDescription"}
                     className={s.lookingJob} placeholder={'tell us about yourself'}/></div>
        <div className={s.social}>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
                <b>{key}: <Field component={Input} name={"contacts." + key} placeholder={key}/></b>
            </div>
        })}
        </div>
        <div>
            <button onClick={() => {}}>Save</button>
        </div>
        {error && <div className={s.formError}>
            {error}
        </div>}
    </form>
}

const ProfileDataReduxForm = reduxForm({form: 'profileData'})(ProfileDataForm)
export default ProfileDataReduxForm