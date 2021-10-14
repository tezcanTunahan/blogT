import "./post.css"
import moment from "moment"
import {useDispatch} from "react-redux"
import {deletePost, likePost} from "../../../actions/posts"

function Post({post, setCurrentId}){

    const dispatch = useDispatch()

    const user = JSON.parse(localStorage.getItem("profile"))
       

    return(
        <div className="postContainer">
            <h2 className="title">{post.title}</h2>
            <p className="post-message">{post.message}</p>
            <p className="writer">Writer: {post.name}</p>
            <p className="tags">Tags: {post.tags.map(item => `#${item} `)}</p>
            <p className="posted-time">Posted time: {moment(post.createdAt).fromNow() }</p>

            {(user?.result?.googleId === post.creator || user?.result?._id === post.creator) && <div className="delete-update">
                <button onClick={()=>{ dispatch(deletePost(post._id)) }}>delete</button>
                <button onClick={()=> setCurrentId(post._id) } >update</button>
                </div>
            }
         
            <button className="like-btn" disabled={!user?.result} onClick={()=>{dispatch(likePost(post._id))}}><i class="far fa-thumbs-up"></i>
            {post?.likes?.length}</button>

        </div>
    )
}

export default Post 