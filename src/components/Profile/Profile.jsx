import React from 'react';
import './Profile.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = (props) => {

   

    return (
        <div className="profile">
            <div className="profile-wrapper">
                <ProfileInfo />
                <MyPosts posts={props.profilePage.posts} addPost={props.addPost} />
            </div>
        </div>
    )
}

export default Profile;