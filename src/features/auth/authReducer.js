import { createAction, createReducer } from '@reduxjs/toolkit';
import { authenticationConstants as AC } from '@constants/auth';
import { combineReducers } from 'redux';

const actionInitialState = {
    pending: false,
    success: false,
    failed: false,
};


const login = createReducer({ ...actionInitialState }, (builder) => {
    builder
    .addCase(createAction(AC.AUTH_LOGIN_START),(state, action)=>{
        return { ...state, pending: true };
    })
    .addCase(createAction(AC.AUTH_LOGIN_SUCCESS),(state, action)=>{
        return { ...state, pending: false, success: true };
    })
    .addCase(createAction(AC.AUTH_LOGIN_FAILED),(state, action)=>{
        return { ...state, failed: true, success: false, pending: false };
    })
    .addDefaultCase((state, action) => {
        return { ...state };
    })
});

const logout = createReducer({ ...actionInitialState }, (builder) => {
    builder
    .addCase(createAction(AC.AUTH_LOGOUT_START),(state, action)=>{
        return { ...state, pending: true };
    })
    .addCase(createAction(AC.AUTH_LOGOUT_SUCCESS),(state, action)=>{
        return { ...state, pending: false, success: true };
    })
    .addCase(createAction(AC.AUTH_LOGOUT_FAILED),(state, action)=>{
        return { ...state, failed: true, success: false, pending: false };
    })
    .addDefaultCase((state, action) => {
        return { ...state };
    })
});

const register = createReducer({ ...actionInitialState }, (builder) => {
    builder
    .addCase(createAction(AC.AUTH_REGISTER_START),(state, action)=>{
        return { ...state, pending: true };
    })
    .addCase(createAction(AC.AUTH_REGISTER_SUCCESS),(state, action)=>{
        return { ...state, pending: false, success: true };
    })
    .addCase(createAction(AC.AUTH_REGISTER_FAILED),(state, action)=>{
        return { ...state, failed: true, success: false, pending: false };
    })
    .addDefaultCase((state, action) => {
        return { ...state };
    })
});

const resetPass = createReducer({ ...actionInitialState }, (builder) => {
    builder
    .addCase(createAction(AC.AUTH_RESET_PASSWORD_START),(state, action)=>{
        return { ...state, pending: true };
    })
    .addCase(createAction(AC.AUTH_RESET_PASSWORD_SUCCESS),(state, action)=>{
        return { ...state, pending: false, success: true };
    })
    .addCase(createAction(AC.AUTH_RESET_PASSWORD_FAILED),(state, action)=>{
        return { ...state, failed: true, success: false, pending: false };
    })
    .addDefaultCase((state, action) => {
        return { ...state };
    })
});

export default combineReducers({
    login,
    register,
    resetPass,
    logout
});