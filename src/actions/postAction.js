
import { FETCH_POST, NEW_POST } from './types';
import axios from "axios";


export const fetchPosts = () => async dispatch => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5");
    dispatch({ type: FETCH_POST, payload: res.data});
}

export const createPost = (post) => async dispatch => {
    console.log("action called");
    const res = await axios.post('https://jsonplaceholder.typicode.com/posts', post);
    dispatch({type: NEW_POST, payload: res.data});
}
