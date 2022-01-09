import axios from "axios";
import { onAddUser } from "../actions/user.actions";
import { StoreDispatch } from "../models/store.model";
import { User, UserFromServer } from "../models/user.model";

const usersURL = 'https://api.github.com/users';

export const fetchUser = function (userLogin: string) {
    return async (dispatch: StoreDispatch) => {
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

        dispatch(onAddUser(user));
    }
}
