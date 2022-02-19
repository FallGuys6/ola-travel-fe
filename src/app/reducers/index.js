import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import services from './services/index';
import pages from './pages/index';
import { history } from '@utils/index';
export default combineReducers({
    router:connectRouter(history),
    services,
    pages
})
