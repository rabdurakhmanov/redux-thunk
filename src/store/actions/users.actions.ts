import { Draft, PayloadAction } from "@reduxjs/toolkit";
import { UsersState } from "../models/users.model";

const addUsers = (state: Draft<UsersState>, action: PayloadAction<any>) => {
    state.value = [...state.value, ...action.payload];
}

const clearUsers = (state: Draft<UsersState>) => {
    state.value = [];
}

export const usersActions = {
    addUsers,
    clearUsers
};
