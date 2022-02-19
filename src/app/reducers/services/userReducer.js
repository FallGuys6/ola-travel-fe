import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import UserModels from '@models/userModels';
// import * as AC from '@app/constants/userActions';
import { createSlice } from "@reduxjs/toolkit";

// Default state when an action is performed
const actionInitialState = {
    pending: false,
    success: false,
    failed: false,
};
// Default state when performing data retrieval
const listInitialState = {
    pending: false,
    success: false,
    failed: false,
    data: [],
}
const userSlice = createSlice({
    name:"user",
    initialState:{...listInitialState},
    reducers:{
        getInfoUser: (state, action) => {
            console.log(`getInfoUser_${state}`)
            console.log(`getInfoUser_${action}`)
        }
    }
});
const { actions, reducer } = userSlice;
export const {getInfoUser} = actions;
// export default combineReducers({user:reducer});
export default reducer
