import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { User } from './usersReducer';

export interface UserState {
    value: User | null;
}

const initialState: UserState = {
    value: null,
};

const name = 'user';

const { actions, reducer } = createSlice({
    name,
    initialState,
    reducers: {
        addUser: (state: Draft<UserState>, action: PayloadAction<any>) => {
            state.value = {...action.payload};
        },
        clearUser: (state: Draft<UserState>) => {
            state.value = null;
        },
    },
});

export const { addUser, clearUser } = actions;

export default reducer;
