import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { userConstants as AC } from '@constants/user';
// import API from './userApi';
import { handleHttpCode, extractErrorMsg } from '@features/helpers';

/**============= FETCH CURRENT INFO USER ============== */

function* fetchCurrentUserSaga(action) {
  try {
    yield put({ type: AC.GET_CURRENT_USER_START });
    // let { dataResponse } = yield call(API.fetchInfoUser, {id:action.payload.id});
    const isLogged = JSON.parse(localStorage.getItem('user'));
    if (isLogged.id === action.payload.id) {
      localStorage.removeItem('user');
      localStorage.setItem('user', JSON.stringify(dataResponse));
      yield put({ type: AC.SET_INFO_USER, payload: dataResponse });
    }
    yield put({ type: AC.GET_CURRENT_USER_SUCCESS, payload: dataResponse });
  } catch (error) {
    console.error(error);
    yield put({ type: AC.GET_CURRENT_USER_FAILED });
  }
}



export const userSaga = [
    takeEvery(AC.GET_CURRENT_USER, fetchCurrentUserSaga)
];