import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { history } from '@utils/index';
import userReducer from './user/userReducer';
export default combineReducers({
    router:connectRouter(history),
    user:userReducer
});