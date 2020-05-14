import { combineReducers } from 'redux';

import uploads from './uploads';
import errors from './errors';
import messages from './messages';

export default combineReducers({
    uploads,
    errors,
    messages
});