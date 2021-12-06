import React from 'react';
import {useAppDispatch, useAppSelector} from "../../store/hooks/usersHooks";
import {AppDispatch} from "../../store/store";

export function UsersList() {
    const users = useAppSelector(state => state.users);
    const dispatch: AppDispatch = useAppDispatch();

    return null;
}
