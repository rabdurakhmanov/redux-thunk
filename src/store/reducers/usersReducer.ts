import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { UsersListItem } from '../../models/User/user.model';


export interface UsersState {
    value: UsersListItem[];
}

const initialState: UsersState = {
    value: [],
};

const name = 'users';

const { actions, reducer } = createSlice({
    name,
    initialState,
    reducers: {
        addUsers: (state: Draft<UsersState>, action: PayloadAction<any>) => {
            state.value = [...state.value, ...action.payload];
        },
        clearUsers: (state: Draft<UsersState>) => {
            state.value = [];
        },
    },
});

export const { addUsers, clearUsers } = actions;

export default reducer;
