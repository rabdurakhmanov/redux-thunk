import {AppDispatch} from '../store';
import axios from 'axios';

const usersURL = 'https://api.github.com/users';

export const fetchUsers = () => async (dispatch: AppDispatch) => {
    const response = await axios.get(usersURL);
    dispatch(() => console.log(response.data));
}
