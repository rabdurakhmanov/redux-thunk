import axios from 'axios';
import { User, UserFromServer, UsersListItem, UsersListItemFromServer } from '../models/user.model';
import { addUser } from '../reducers/user.reducer';
import { addUsers } from '../reducers/users.reducer';
import { StoreDispatch } from '../store';

const usersURL = 'https://api.github.com/users';

export const fetchUsers = () => async (dispatch: StoreDispatch) => {
    const response = await axios.get<UsersListItemFromServer[]>(usersURL);
    const users = response.data.map<UsersListItem>(user => ({
        login: user.login,
        id: user.id,
        avatarUrl: user.avatar_url,
        htmlUrl: user.html_url,
        type: user.type,
        siteAdmin: user.site_admin
    }));

    dispatch(addUsers(users));
}

export const fetchUser = (userLogin: string) => async (dispatch: StoreDispatch) => {
    const response = await axios.get<UserFromServer>(`${usersURL}/${userLogin}`);
    const userFromServer = response.data;

    const user: User = {
        login: userFromServer.location,
        id: userFromServer.id,
        avatarUrl: userFromServer.avatar_url,
        htmlUrl: userFromServer.html_url,
        type: userFromServer.type,
        siteAdmin: userFromServer.site_admin,
        name: userFromServer.name,
        company: userFromServer.company,
        blog: userFromServer.blog,
        location: userFromServer.location
    };

    dispatch(addUser(user));
}
