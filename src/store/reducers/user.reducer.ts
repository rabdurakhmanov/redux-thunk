import { createSlice } from '@reduxjs/toolkit';
import { userAction } from '../actions/user.actions';
import { UserState } from '../models/user.model';

const initialState: UserState = {
    value: null,
};

const name = 'user';

const { actions, reducer } = createSlice({
    name,
    initialState,
    reducers: {
        addUser: userAction.addUser,
        clearUser: userAction.clearUser,
    },
});

export const { addUser, clearUser } = actions;

export default reducer;
