import { Action } from "../models/store.model";
import { User, UserActionTypes } from "../models/user.model";

const { AddUser, ClearUser } = UserActionTypes;

export const onAddUser = function (user: User): Action<UserActionTypes, User> {
    return {
        type: AddUser,
        payload: user
    };
};

export const onClearUser = function (): Action<UserActionTypes, null> {
    return {
        type: ClearUser,
        payload: null
    };
};
