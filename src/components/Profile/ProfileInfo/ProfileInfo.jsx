import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import UserPhoto from "../../assets/images/avatar.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit =(formData) => {
        props.saveProfile(formData).then (
            () => {
                setEditMode(false)
            }
        )
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div>
                    <img className={s.fones}
                         src="https://swall.teahub.io/photos/small/183-1832905_michael-larsen-author-coaching-cable-stayed-bridge.jpg"/>
                </div>
                <img className={s.avatar} src={props.profile.photos.large || UserPhoto}/>
                <div className={s.divInput}>{props.isOwner &&
                <input className={s.inputFile} type={"file"} onChange={onMainPhotoSelected}/>}</div>
                { editMode ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/>
                            : <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => {setEditMode(true)}}/>}
                <div className={s.statusDiv}><b>Status:</b><ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/></div>
            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
    <div className={s.name}>{profile.fullName}</div>
    <div className={s.about}>{profile.aboutMe}</div>
        <div className={s.job}><b>Looking for a job</b>:{profile.lookingForAJobDescription}</div>
    <div className={s.social}>
        <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
        return <Contact key={key} ContactTitle={key} ContactValue={profile.contacts[key]}/>
    })}
    </div>
        {isOwner && <div className={s.button}><button onClick={goToEditMode}>Edit...</button></div>}
</div>
}

export const Contact = ({ContactTitle, ContactValue}) => {
    return <div className={s.contact}>{ContactTitle}: {ContactValue}</div>
}

export default ProfileInfo;

