import axios from 'axios';
import { addUsers } from '../reducers/usersReducer';
import { StoreDispatch } from '../store';

const usersURL = 'https://api.github.com/users';

export const fetchUsers = () => async (dispatch: StoreDispatch) => {
    const response = await axios.get(usersURL);

    dispatch(addUsers(response.data));
}
