import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit';

export interface UsersState {
    value: {}[];
}

const initialState: UsersState = {
    value: [],
};

const name = 'counter';

const {actions, reducer} = createSlice({
    name,
    initialState,
    reducers: {
        addUser: (state: Draft<UsersState>, action: PayloadAction<any>) => {
            state.value = [...state.value, {}]
        },
        deleteUser: (state: Draft<UsersState>, action: PayloadAction<any>) => {
            state.value = state.value.filter(item => true);
        },
    },
});

export const {addUser, deleteUser} = actions;

export default reducer;
