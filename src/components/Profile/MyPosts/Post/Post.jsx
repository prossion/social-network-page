import React from 'react';
import s from './Post.module.css';
import avatar from './../../../assets/images/avatar.png'

const Post = (props) => {

    return (
        <div className={s.item}>
            <img src={avatar} />
            <div className={s.text}>{props.message}</div>
            <div>
                <span className={s.like}>Like: {props.likecount}</span>
            </div>

        </div>
    )
}

export default Post;