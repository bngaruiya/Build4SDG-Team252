import axios from 'axios';

import { GET_UPLOADS } from './types';

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
