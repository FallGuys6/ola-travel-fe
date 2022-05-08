import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { push } from 'connected-react-router';
import { useSelector } from 'react-redux';
import { handleHttpCode, extractErrorMsg } from '@features/helpers';
import { authenticationConstants as AC } from '@constants/auth';
import { userConstants as ACU } from '@constants/user';
import {setLocalStorage, removeLocalStorage, getLocalStorage} from '@utils/helpers';
import API from './authApi';

function* loginSaga(action) {
  try {
    yield put({ type: AC.AUTH_LOGIN_START });
    const dataAction = action.payload;
    const {data} = yield call(API.login, {type: dataAction.type, roles: dataAction.roles, data: dataAction.data});
    console.log('logged', data)
    //* handle set token
    yield setLocalStorage('token', data.token);
    yield setLocalStorage('user', JSON.stringify(data));
    yield put({ type: AC.AUTH_LOGIN_SUCCESS });
    toast.success('Đăng nhập thành công');
    // * handle set info user
    yield put({ type: ACU.SET_INFO_USER, payload:data });
  } catch (e) {
    toast.error(extractErrorMsg(e))
    yield put({ type: AC.AUTH_LOGIN_FAILED });
  }
}

function* logoutSaga(action){
  try{
    yield put({type: AC.AUTH_LOGOUT_START});
    if(typeof getLocalStorage('token') && getLocalStorage('user') !== 'undefined'){
      yield removeLocalStorage('token');
      yield removeLocalStorage('user');
      console.log('remove local storage')
    }
    yield put({type: AC.AUTH_LOGOUT_SUCCESS});
    if(action.payload.refresh && typeof window !== 'undefined'){
      window.location.reload();
    }
  }catch(error){
    console.error('logout failed', error)
    yield put({type: AC.AUTH_LOGOUT_FAILED});
  }
}

export const authSaga = [
  takeEvery(AC.AUTH_LOGIN, loginSaga),
  takeEvery(AC.AUTH_LOGOUT, logoutSaga),
];