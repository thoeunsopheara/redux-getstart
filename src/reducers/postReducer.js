
import { FETCH_POST, NEW_POST } from '../actions/types';

const initialState = {
    items: [],
}

export default function postsController(state=initialState, action){
    switch(action.type){
        case FETCH_POST:
            return {
                ...state,
                items: action.payload
            }
        case NEW_POST:
            return {
                ...state,
                items: [action.payload, ...state.items],
            }
        default:
            return state;            
    }
} 