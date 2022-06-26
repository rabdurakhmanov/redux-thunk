import axios from "axios";
import map from "lodash/map";
import { onAddUsers } from "../actions/users.actions";
import { StoreDispatch } from "../models/store.model";
import { UsersListItem, UsersListItemFromServer } from "../models/user.model";

const usersURL = "https://api.github.com/users";

export const fetchUsers = function () {
    return async (dispatch: StoreDispatch) => {
        const response = await axios.get<UsersListItemFromServer[]>(usersURL);
        const users = map<UsersListItemFromServer, UsersListItem>(
            response.data,
            (user) => ({
                login: user.login,
                id: user.id,
                avatarUrl: user.avatar_url,
                htmlUrl: user.html_url,
                type: user.type,
                siteAdmin: user.site_admin
            })
        );

        dispatch(onAddUsers(users));
    };
};
