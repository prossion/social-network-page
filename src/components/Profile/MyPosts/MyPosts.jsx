import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsReduxForm} from './MyPostForm'

const MyPosts = (props) => {
    console.log("render")
    let postsElements = props.posts.map(p => <Post message={p.message} key={p.id} likecount={p.likecount}/>)

    const onSubmit = (formData) => {
        props.addPost(formData.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts:</h3>
            <PostsReduxForm onSubmit={onSubmit}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}


export default MyPosts;