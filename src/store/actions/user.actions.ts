import { Draft, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../models/user.model";

const addUser = (state: Draft<UserState>, action: PayloadAction<any>) => {
    state.value = { ...action.payload };
}

const clearUser = (state: Draft<UserState>) => {
    state.value = null;
}

export const userAction = {
    addUser,
    clearUser
};
