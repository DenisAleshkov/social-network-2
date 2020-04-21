import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {
    return (
        <div className={style.posts}>
            <div className={`${style.posts__controlers} ${style.controllers}`}>
                <div className={style.controllers__input}>
                    <textarea className={style.controllers__textarea}
                                placeholder="Enter post text"                            
                    ></textarea>
                </div>
                <div className={style.controllers__send}>
                    <button className={style.controllers__button}>Add post</button>
                </div>   
            </div>
            <div className={style.posts__list}>
                <Post message='hi!' />
                <Post message='1st post' />
                <Post message='it`s good '/>
            </div>
        </div>
    )
}

export default MyPosts;
