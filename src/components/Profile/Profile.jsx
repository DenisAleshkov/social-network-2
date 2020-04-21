import React from 'react';
import style from './Profile.module.css';
import Avatar from './../../img/banner/home-right.png';
import MyPosts from './MyPosts/MyPosts.jsx';

const Profile = () => {
    return (
        <div className={style.profile}>
            <div className={style.profile__wrapper}>
                <div className={style.profile__avatar}>
                    <img src={Avatar} alt="profile-photo" />
                </div>
                <div className={`${style.profile__posts} ${style.post}`}>
                    <MyPosts />
                </div>
            </div>
        </div>
    )
}

export default Profile;