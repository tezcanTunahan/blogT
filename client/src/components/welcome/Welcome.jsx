import "./welcome.css"
import welcomeBlogImg from "../../img/welcomeBlog.svg"

function Welcome(){
    return(
        <div className="welcomeContainer">
        <div>
            <h1 className="welcomeH1">welcome to blogT</h1>
            <p>This is the place you can share your blog </p>
        </div>
            <img className="welcomeImg" src={welcomeBlogImg} alt="" />
        </div>
    )
}

export default Welcome