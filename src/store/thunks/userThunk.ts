import axios from 'axios';
import { addUsers } from '../reducers/usersReducer';
import { StoreDispatch } from '../store';

const usersURL = 'https://api.github.com/users';

export const fetchUser = (user: string) => async (dispatch: StoreDispatch) => {
    const response = await axios.get(`${usersURL}/${user}`);

    dispatch(addUsers(response.data));
}
