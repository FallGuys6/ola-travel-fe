import request from '@apis/configureApi';
import {setLocalStorage, removeLocalStorage} from '@utils/helpers';
/**============== Api fetch info user ============ */
const fetchInfoUser = ({id}) => {
    return request.get(id)
};

const login = (params) => {
  const {type='email', email, password, access_token} = params;
  let data = type === 'email' ? {email, password} : {access_token};
  return request.post(`/user/login/${type}`, data)
}

const register = (params) => {
  const {type, email, password, phone} = params;
  let data = type === 'email' ? {email, password} : {access_token};
  return request.post('/user/register', data)
}

export default {
  fetchInfoUser,
  login
};
