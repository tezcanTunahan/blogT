import "./posts.css"
import Post from "./post/Post";
import {useSelector} from "react-redux"


function Posts({setCurrentId}){

    const posts = useSelector(state => state.posts ) 


    return(
        <div className="posts-container">
            {!posts.length ? <h1>0 item</h1> :
                posts.map(post=>
                    <Post key={post._id} post={post} setCurrentId={setCurrentId} />
                )
            }
        </div>
    )
}

export default Posts