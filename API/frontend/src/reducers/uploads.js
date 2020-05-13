import { GET_UPLOADS, DELETE_UPLOAD, ADD_UPLOAD } from '../actions/types.js';

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
        case DELETE_UPLOAD:
            return {
                ...state,
                uploads: state.uploads.filter(upload => upload.id !== action.payload)
            }
        case ADD_UPLOAD:
            return {
                ...state,
                uploads: [...state.uploads, action.payload]
            }
        default:
            return state;
    }
}