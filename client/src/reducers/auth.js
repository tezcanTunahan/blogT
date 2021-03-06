import {AUTH,LOGOUT} from "../constants/actionTypes"

export default function authReducer(state = {authData: null}, action){
  switch (action.type) {
    case AUTH:
        localStorage.setItem("profile",JSON.stringify({...action?.data}))
        return {...state, authData: action?.data}  
    case LOGOUT:
        localStorage.clear()
        return {...state}  
        
    default:
          return state;
  }
}