import React from 'react'

const Post = (props) => {
    const {title, body} = props;

    return (
        <div style={{width : '350px', margin : '.5rem', border : '1px solid black', borderRadius : '.5rem', padding : '.3rem', cursor : 'pointer', backgroundColor : 'wheat'}}>
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
