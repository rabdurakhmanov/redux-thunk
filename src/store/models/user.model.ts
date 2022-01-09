
export interface UsersListItemFromServer {
    login: string;
    id: string;
    avatar_url: string;
    html_url: string;
    type: string;
    site_admin: boolean;
}

export interface UserFromServer extends UsersListItemFromServer {
    name: string;
    company: string;
    blog: string;
    location: string;
}

export interface UsersListItem {
    login: string;
    id: string;
    avatarUrl: string;
    htmlUrl: string;
    type: string;
    siteAdmin: boolean;
}

export interface User extends UsersListItem {
    name: string;
    company: string;
    blog: string;
    location: string;
}

export enum UserActionTypes {
    AddUser = 'ADD_USER',
    ClearUser = 'CLEAR_USER'
}

export interface UserState {
    value: User | null;
}
