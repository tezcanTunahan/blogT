import {FETCH_ALL,UPDATE,DELETE,LIKE,CREATE} from "../constants/actionTypes"

export default function reducer(posts = [],action){
    switch (action.type) {
        case FETCH_ALL:
            return action.payload

        case CREATE:
            return [...posts, action.payload]

        case UPDATE:
        case LIKE:
            return posts.map(post => post._id === action.payload._id ? action.payload : post)
        
        case DELETE:
            return posts.filter(post => action.payload !== post._id)
        
        default:
            return posts
    }
}