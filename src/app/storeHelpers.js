import UserModels from '@models/userModels';
import {getLocalStorage} from '@utils/helpers';
//! function to get user's previously loaded information

const getPreloadedState = () => {
  let state = {};
  //Check the status of the browser window
  if (typeof window !== 'undefined') {
    const getInfo = getLocalStorage('user');
    if (getInfo) {
      state = {
        user: {
          info: new UserModels(JSON.parse(getInfo)),
        },
      };
    } else {
      state = {
        user: {
          info: new UserModels({}),
        },
      };
    }
  }
  return state;
};

export { getPreloadedState };