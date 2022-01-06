import axios from "axios";
import { User, UserFromServer } from "../../models/User/user.model";
import { addUser } from "../reducers/userReducer";
import { StoreDispatch } from "../store";

const usersURL = 'https://api.github.com/users';

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
