import React from 'react';
import './MyPosts.css';
import Post from './Post/Post.jsx';

const MyPosts = (props) => {

    let posts = props.posts.map( (p, index) => <Post key={index+p.likesCount} message={p.message} likesCount={p.likesCount}  /> )

    let newPostElement = React.createRef();

    const AddPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return (
        <div className="posts">
            <div className="posts-controlers controllers">
                <div className="controllers-input">
                    <textarea ref={newPostElement} className="controllers-textarea"
                                placeholder="Enter post text"                            
                    ></textarea>
                </div>
                <div className="controllers-send">
                    <button onClick={AddPost} className="controllers-button">Add post</button>
                </div>   
            </div>
            <div className="posts-list">
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;
