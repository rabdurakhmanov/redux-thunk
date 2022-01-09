import { Action } from '../models/store.model';
import { UsersListItem } from '../models/user.model';
import { UsersActionTypes, UsersState } from '../models/users.model';

const initialState: UsersState = {
    value: [],
};

const addUsers = function (state: UsersState, payload: UsersListItem[]): UsersState {
    return { value: payload };
}

const clearUsers = function (state: UsersState): UsersState {
    return { value: [] };
}

export const usersReducer = function (state: UsersState = initialState, action: Action<UsersActionTypes, UsersListItem[]>) {
    const { AddUsers, ClearUsers } = UsersActionTypes;
    const { type, payload } = action;

    switch (type) {
        case AddUsers: return addUsers(state, payload);
        case ClearUsers: return clearUsers(state);
        default: return state;
    }
}
