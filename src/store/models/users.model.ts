import { UsersListItem } from "./user.model";

export enum UsersActionTypes {
    AddUsers = 'ADD_USERS',
    ClearUsers = 'CLEAR_USERS'
}

export interface UsersState {
    value: UsersListItem[];
}
