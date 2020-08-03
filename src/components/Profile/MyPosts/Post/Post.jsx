import React from 'react';
import './Post.css';

const Post = (props) => {
    return(
        <div className="post">
            {props.message}
            <span className="post-likes">{props.likesCount}</span>
        </div>
    )
}

export default Post;