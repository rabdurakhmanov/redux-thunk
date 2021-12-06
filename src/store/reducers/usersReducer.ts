import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit';

export interface UsersListItem {
    login: string,
    id: string,
    url: string,
    type: string,
    'is_admin': boolean
}

export interface UsersState {
    value: UsersListItem[];
}

const initialState: UsersState = {
    value: [],
};

const name = 'counter';

const {actions, reducer} = createSlice({
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

export const {addUsers, clearUsers} = actions;

export default reducer;
