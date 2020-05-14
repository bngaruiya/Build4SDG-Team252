import axios from 'axios';

import { GET_UPLOADS, DELETE_UPLOAD, ADD_UPLOAD } from './types';
import { createMessage, returnErrors } from './messages';

// Get Uploads
export const getUploads = () => dispatch => {
    axios.get('/api/predict/')
        .then(res => {
            dispatch({
                type: GET_UPLOADS,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(
            err.response.data,
            err.response.status
        )));
}

// Delete Uploads
export const deleteUpload = (id) => dispatch => {
    axios.delete(`/api/predict/${id}`)
        .then(res => {
            dispatch(createMessage({ deleteUpload: "Image File Deleted" }))
            dispatch({
                type: DELETE_UPLOAD,
                payload: id
            });
        })
        .catch(err => dispatch(returnErrors(
            err.response.data,
            err.response.status
        )));
}

//Add Upload
export const addUpload = (upload) => dispatch => {
    axios.post('/api/predict/', upload, {
        headers: {
            "content-type": "multipart/form-data"
        }
    })
        .then(res => {
            dispatch(createMessage({ addUpload: "Image File Uploaded for Inference!" }))
            dispatch({
                type: ADD_UPLOAD,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(
            err.response.data,
            err.response.status
        )));
}