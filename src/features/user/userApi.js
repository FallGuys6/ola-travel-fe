import request from '@apis/configureApi';

/**============== Api fetch info user ============ */
const fetchInfoUser = ({id}) => {
    return request.get(id)
};

export default {
  fetchInfoUser,
};
