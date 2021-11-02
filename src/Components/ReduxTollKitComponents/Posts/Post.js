import React from 'react'

const Post = (props) => {
    const {title, body} = props;

    return (
        <div className="post-card-container">
            <div>
                <b>{title}</b>
            </div>
            <div>
                <p>{body}</p>
            </div>
        </div>
    )
}

export default Post;
