import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchAllPosts } from '../../../ReduxToolkit/Slices/postsSlice';
import EditPostModal from './EditPostModal';
import Post from './Post';
import { updateSelectedPost, updatePost } from '../../../ReduxToolkit/Slices/postsSlice';

// fetchAllPosts

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state)=>state?.postsModel?.posts);
    console.log('InComponent', posts);

    const [openEditPostModal, setOpenEditPostModal] = useState(false);

    const fetchPosts = ()=>{
        dispatch(fetchAllPosts());
    }

    const handlePostClick=(postData)=>{
        dispatch(updateSelectedPost(postData));
        console.log(postData);
        setOpenEditPostModal(true);
    }

    const closeEditModal=()=>{
        setOpenEditPostModal(false);
    }

    const savePostData=(data)=>{
        console.log(data);
        dispatch(updatePost(data));
        closeEditModal();
    }


    return (
        <div>
            <div style={{textAlign : 'center', marginTop : '4rem', paddingTop : '1rem', borderTop : '1px solid black' }}>
                <button onClick={fetchPosts}>Fetch Posts</button>
            </div>

            <div style={{display : 'flex', justifyContent : 'space-evenly', flexWrap : 'wrap'}}>
                {posts?.map((post)=>{
                        return(
                            <div key={post.id} onClick={()=>{handlePostClick(post)}}>
                                <Post title={post.title} body={post.body}/>
                            </div>
                        );
                    })

                }
            </div>


            {openEditPostModal && 
                <EditPostModal
                    onClose={()=>{closeEditModal()}}
                    onSave={(data)=>{savePostData(data)}}
                />
            }
        </div>
    )
}

export default Posts;
