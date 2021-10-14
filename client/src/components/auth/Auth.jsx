import "./auth.css"
import { useState } from "react"
import { GoogleLogin } from 'react-google-login';
import {useDispatch} from "react-redux"
import { useHistory } from "react-router";
import {signin, signup} from "../../actions/auth"

function Auth(){

    const initialState = {firstName: "", lastName: "", email: "", password: ""}
    const [formData,setFormData] = useState(initialState)
    const [isSignup,setIsSignup] = useState(false) 
    const dispatch = useDispatch()
    const history = useHistory()
    
    function handleSubmit(e){
        e.preventDefault()
        if(isSignup){
            dispatch(signup(formData,history))
        }else{
            dispatch(signin(formData,history))
        }
    }
    function handleChange(e){
        setFormData({...formData, [e.target.name] :e.target.value} )
    }
    function switchMode(){
        setIsSignup(prev => !prev)
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj
        const token = res?.tokenId

        try {
            dispatch({type: "AUTH", data: {result, token}})
            history.push("/")
        } catch (error) {
            console.log(error)
        }
    }
    const googleFailure = () => console.log("Google Log in was unsuccesfull try later")

    return(
        <div className="authContainer">
            <h2 className="sign-title">{isSignup ? "Sign up" : "Log in"}</h2>

            <form className="authForm" onSubmit={handleSubmit}>
                {isSignup && (
                    <>
                        <input className="firstName" type="text" name="firstName" onChange={handleChange} placeholder="firstName" autoFocus />
                        <input className="lastName" type="text" name="lastName" onChange={handleChange} placeholder="lastName" autoFocus />
                    </>
                )}
                        <input className="email" type="email" name="email" onChange={handleChange} placeholder="email  " autoFocus />
                        <input className="password" type="password" name="password" onChange={handleChange} placeholder="password  " autoFocus />
                        <button className="signin-btn" type="submit">{isSignup ? "Sign up" : "Log in"}</button>
                        <button className="signup-btn" onClick={switchMode}>{isSignup ? "Already have a acoount? Log in" : "Don't have a acoount? Sign up" }</button>
                        <GoogleLogin
                            className="google-btn"
                            clientId="356797270903-25ctmce68v67jir0fk0mhso3dh1qvlm1.apps.googleusercontent.com"
                            buttonText="Login with google"
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy={'single_host_origin'}
                        />
            </form>
        </div>
        )
}

export default Auth