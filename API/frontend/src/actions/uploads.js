import axios from 'axios';

import { GET_UPLOADS, DELETE_UPLOAD, ADD_UPLOAD } from './types';

// Get Uploads
export const getUploads = () => dispatch => {
    axios.get('/api/predict/')
        .then(res => {
            dispatch({
                type: GET_UPLOADS,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
}

// Delete Uploads
export const deleteUpload = (id) => dispatch => {
    axios.delete(`/api/predict/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_UPLOAD,
                payload: id
            });
        })
        .catch(err => console.log(err));
}

//Add Upload
export const addUpload = (upload) => dispatch => {
    axios.post('/api/predict/', upload, {
        headers: {
            "content-type": "multipart/form-data"
        }
    })
        .then(res => {
            dispatch({
                type: ADD_UPLOAD,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
}