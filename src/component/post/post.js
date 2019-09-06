import React from 'react';



const Post = ({ article }) => {
    
    return(
        <div className="acrticle">
            <h2>{article.title}</h2>
            <p>{article.body}</p>
        </div>
    );
}

export default Post;