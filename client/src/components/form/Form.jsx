import "./form.css"
import { useEffect, useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import {createPost, updatePost} from "../../actions/posts"
import loginImg from "../../img/login.svg"
import {Link} from "react-router-dom" 
    

function Form({currentId, setCurrentId}){
    const dispatch = useDispatch()
    const [postData,setPostData] = useState({title: "", message: "", tags: "", likes: []})
    const user = JSON.parse(localStorage.getItem("profile"))

    const post = useSelector(state => currentId ? state.posts.find(p => p._id === currentId) : null )

    useEffect(()=>{
        if(post) setPostData(post)
    },[post])  

    function submitHandler(e){
        e.preventDefault()
        if(currentId){
            dispatch(updatePost(currentId,{...postData, name: user?.result.name}))// burda
        }else{
            dispatch(createPost({...postData, name: user?.result.name}))
        }
        setCurrentId(null)
        setPostData({title: '', message: '', tags: ''});
    }

    function clearForm(){
        setPostData({title: '', message: '', tags: ''});
        setCurrentId(null)
    }

    if(!user?.result?.name){
        return (
            <div className="please-signin">
                <h1>Please Log in to create a post</h1>
                <img className="login-img" src={loginImg} alt="" />
            </div>
        )
    }


    return(
        <div className="fromContainer">
            <h1> {currentId ? "Update a post" : "Create a post " } </h1>
            <form className="form" onSubmit={submitHandler} >
                <input type="text" name="title" id="" placeholder="title" value={postData.title}
                    onChange={(e)=>{setPostData({...postData, title: e.target.value})}}/>

                <textarea className="message-text" type="text" name="message" id="" placeholder="post" value={postData.message}
                    onChange={(e)=>{setPostData({...postData, message: e.target.value})}}/>

                <input type="text" name="tags" id="" placeholder="tags  (Seperate tags with comma)" value={postData.tags}
                    onChange={(e)=>{setPostData({...postData, tags: e.target.value.split(",")})}}/>

                <button className="submit-btn" type="submit"> {currentId ? "Update" : "Create" }</button>
                <button className="clear-btn" onClick={clearForm} type="button">clear</button>
            </form>
        </div>
        )
}

export default Form