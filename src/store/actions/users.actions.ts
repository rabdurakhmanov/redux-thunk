import { Action } from "../models/store.model";
import { UsersListItem } from "../models/user.model";
import { UsersActionTypes } from "../models/users.model";

const { AddUsers, ClearUsers } = UsersActionTypes;

export const onAddUsers = function (
    users: UsersListItem[]
): Action<UsersActionTypes, UsersListItem[]> {
    return {
        type: AddUsers,
        payload: users
    };
};

export const onClearUsers = function (): Action<UsersActionTypes, []> {
    return {
        type: ClearUsers,
        payload: []
    };
};
