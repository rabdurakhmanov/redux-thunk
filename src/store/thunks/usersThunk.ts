import axios from 'axios';
import { UsersListItem, UsersListItemFromServer } from '../../models/User/user.model';
import { addUsers } from '../reducers/usersReducer';
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
