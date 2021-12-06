import {AppDispatch} from '../store';
import axios from 'axios';
import {addUsers} from '../reducers/usersReducer';

const usersURL = 'https://api.github.com/users';

export const fetchUsers = () => async (dispatch: AppDispatch) => {
    const response = await axios.get(usersURL);

    dispatch(addUsers(response.data));
}
