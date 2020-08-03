import React from 'react';
import './ProfileInfo.css';
import Avatar from './../../../img/banner/home-right.png';

const ProfileInfo = () => {

   

    return(
        <div className="profile-avatar">
            <img src={Avatar} alt="profile-photo" />
        </div>
    )
}

export default ProfileInfo;