import request from '@apis/configureApi';

const login = ({type, roles, data}) => {
  if(type === 'email') {
    return request.post(`/login`, data);
  }
  return request.post(`/login/${roles}/${type}`, data);

};

export default {
  login,
};
