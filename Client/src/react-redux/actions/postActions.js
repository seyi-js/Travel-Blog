import Axios from 'axios'
import {GET_POSTS} from './types'


const config = {
    headers: {
        "Content-Type": "application/json"
    }
}

export const loadPosts = () => dispatch => {
    Axios
        .get( 'api/posts/', config)
        .then( res => dispatch( {
            type: GET_POSTS,
            payload: res.data
        }) )
        .catch( err => console.log( err ) )
    
}