import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { history } from '@utils/index';
import userReducer from './user/userReducer';
import authReducer from './auth/authReducer';
export default combineReducers({
    router:connectRouter(history),
    auth:authReducer,
    user:userReducer,
});