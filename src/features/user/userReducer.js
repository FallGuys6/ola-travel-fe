import { createAction, createReducer } from '@reduxjs/toolkit';
import { userConstants as AC } from '@constants/user';
import { combineReducers } from 'redux';
import UserModels from "@models/userModels";

const actionInitialState = {
  pending: false,
  success: false,
  failed: false,
};

const listInitialState = {
  pending: false,
  success: false,
  failed: false,
  data: [],
};


const info = createReducer({...actionInitialState}, (builder) => {
  builder
    .addCase(createAction(AC.SET_INFO_USER), (state, action) => {
      return new UserModels(action.payload.data);
    })
    .addDefaultCase((state, action) => {
      return { ...state };
    })
});

const current = createReducer({ ...listInitialState }, (builder) => {
  builder
  .addCase(createAction(AC.GET_CURRENT_USER_START), (state, action) =>{
    return { ...state, pending: true };
  })
  .addCase(createAction(AC.GET_CURRENT_USER_SUCCESS), (state, action) => {
    return { ...state, pending: false, success: true, data: new UserModels(action.payload) };
  })
  .addCase(createAction(AC.GET_CURRENT_USER_FAILED), (state, action) => {
    return { ...state, failed: true, success: false, pending: false };
  })
  .addDefaultCase((state, action) => {
    return { ...state };
  })
})

const login = createReducer({ ...actionInitialState }, (builder) => {
  builder
  .addCase(createAction(AC.ACTION_USER_LOGIN_START), (state, action) =>{
    return { ...state, pending: true };
  })
  .addCase(createAction(AC.ACTION_USER_LOGIN_SUCCESS), (state, action) => {
    return { ...state, pending: false, success: true, data: new UserModels(action.payload) };
  })
  .addCase(createAction(AC.ACTION_USER_LOGIN_FAILED), (state, action) => {
    return { ...state, failed: true, success: false, pending: false };
  })
  .addDefaultCase((state, action) => {
    return { ...state };
  })
})

export default combineReducers({
  current,
  info,
  login
});
