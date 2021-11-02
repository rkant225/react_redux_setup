import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const EditPostModal = (props) => {
    const {onClose, onSave} = props;

    const post = useSelector((state)=>state?.postsModel?.selectedPost);

    const [title,setTitle] = useState("");
    const [body,setBody] = useState("");

    useEffect(()=>{
        setTitle(post.title);
        setBody(post.body);
    },[])

    console.log(post);

    const handleFormSubmission =(e)=>{
        e.preventDefault();
        const form = document.getElementById('edit-post-form');
        const formData = new FormData(form);

        const title = formData.get('title');
        const body = formData.get('body');

        onSave({...post, title, body});
    }

    return (
        <div style={{position : 'fixed', top : '0', bottom : '0', right : '0', left : '0', display : 'flex', justifyContent : 'center', alignItems : 'center', backgroundColor : 'rgba(70,70,70,.7)'}}>
            <div className="edit-post-modal-content">
                <form id="edit-post-form" onSubmit={handleFormSubmission}>
                    <div>
                        <label>Title</label>
                        <br/>
                        <input required type="text" name="title" onChange={(e)=>{setTitle(e.target.value)}} value={title}/>
                    </div>
                    
                    <br/>

                    <div>
                        <label>Body</label>
                        <br/>
                        <input required type="text" name="body" onChange={(e)=>{setBody(e.target.value)}} value={body}/>
                    </div>

                    <br/>

                    <div style={{display : 'flex', justifyContent : 'space-between'}}>
                        <button onClick={onClose}>Close</button>
                        <button type="submit" >Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditPostModal;
