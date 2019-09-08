import React from 'react';

const Post = ({ post }) => {
    return(
        <div className="acrticle">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
}

export default Post;