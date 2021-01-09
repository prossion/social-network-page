import React from "react"
import {Field, reduxForm} from "redux-form";
import s from "./MyPosts.module.css";
import {required, maxLengthCreator} from "./.././../Utils/Validators"
import {Input} from "../../common/FormControls/FormControls";

const maxLength = maxLengthCreator(15)

const MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.inputDiv}>
                <Field className={s.input} component={Input} name='newPostText' placeholder={'Write text!'} validate={[required, maxLength]}/>
            </div>
            <div>
                <button className ={s.button}>Add Post</button>
            </div>
        </form>
    )
}

export const PostsReduxForm = reduxForm({form: 'posts'})(MyPostsForm)

export default MyPostsForm