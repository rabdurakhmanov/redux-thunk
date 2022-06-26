import { Action } from "../models/store.model";
import { User, UserActionTypes, UserState } from "../models/user.model";

const initialState: UserState = {
    value: null
};

const addUser = function (payload: User | null): UserState {
    return { value: payload };
};

const clearUser = function (): UserState {
    return { value: null };
};

export const userReducer = function (
    state: UserState = initialState,
    action: Action<UserActionTypes, User | null>
) {
    const { AddUser, ClearUser } = UserActionTypes;
    const { type, payload } = action;

    switch (type) {
        case AddUser:
            return addUser(payload);
        case ClearUser:
            return clearUser();
        default:
            return state;
    }
};
