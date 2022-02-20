import { combineReducers } from 'redux';
import UserModels from '@models/userModels';
import { createSlice } from "@reduxjs/toolkit";

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
}

const userSlice = createSlice({
    name:"user",
    initialState:{...listInitialState},
    reducers:{
        getUser: (state, action) => {
            console.log(`getInfoUser_${state}`)
            console.log(`getInfoUser_${action}`)
        },
    }
});

export const {getUser} = userSlice.actions;
export default userSlice.reducer;