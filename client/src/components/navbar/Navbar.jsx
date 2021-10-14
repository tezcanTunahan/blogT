import "./navbar.css"
import {Link, useHistory, useLocation} from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import decode from "jwt-decode"
function Navbar(){

    const dispatch = useDispatch() 
    const history = useHistory()
    const location = useLocation()
    const [user,setUser] = useState(JSON.parse(localStorage.getItem("profile")))
    
    function logout(){
        dispatch({type: "LOGOUT"})
        history.push("/")
        setUser(null)
        window.location.reload();
    }
    useEffect(()=>{
        const token = user?.token
        //jwt
        if(token){
            const decodedToken = decode(token) 
            if(decodedToken.exp * 1000 < new Date().getTime()) logout()
        }
        setUser(JSON.parse(localStorage.getItem("profile")))
    },[location])

    return(
        <div className="nav">
            <Link className="logo" to="/" >BlogT</Link>
            <div className="toolBar">
                {user ? (
                <div className="profiele">
                    <p className="userName">{user.result.name}</p>
                    <button className="logout-btn" onClick={logout}>log out</button>
                </div>
                ) : 
                (
                    <Link className="nav-signin" to="/auth">Log in</Link>
                )
                }    
            </div>
        
        </div>
    )
}

export default Navbar