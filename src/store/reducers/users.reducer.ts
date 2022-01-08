import { createSlice } from '@reduxjs/toolkit';
import { UsersState } from '../models/users.model';
import { usersActions } from '../actions/users.actions';

const initialState: UsersState = {
    value: [],
};

const name = 'users';

const { actions, reducer } = createSlice({
    name,
    initialState,
    reducers: {
        addUsers: usersActions.addUsers,
        clearUsers: usersActions.clearUsers,
    },
});

export const { addUsers, clearUsers } = actions;

export default reducer;
