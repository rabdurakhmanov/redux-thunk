import React from 'react';
import {useAppDispatch, useAppSelector} from '../../store/hooks/usersHooks';

export function UsersList() {
    const users = useAppSelector(state => state.users);
    const dispatch = useAppDispatch();

    return null;
}
