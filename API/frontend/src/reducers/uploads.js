import { GET_UPLOADS } from '../actions/types.js';

const initialState = {
    uploads: []
}

export default function(state=initialState, action) {
    switch(action.type) {
        case GET_UPLOADS:
            return {
                ...state,
                uploads: action.payload
            }
        default:
            return state;
    }
}