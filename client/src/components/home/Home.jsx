import "./home.css"
import Form from "../form/Form"
import Posts from "../posts/Posts"
import { useDispatch } from "react-redux"
import { useEffect,useState } from "react"
import { getPosts } from "../../actions/posts"

function Home (){

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPosts())
    },[dispatch])

    const [currentId,setCurrentId] = useState(null)

    return(
        <div className="home-container">
            <div className="left">
                <Posts setCurrentId={setCurrentId} />
            </div>
            <div className="right">
                <Form  currentId={currentId} setCurrentId={setCurrentId} />
            </div>
        </div>
        )
}

export default Home