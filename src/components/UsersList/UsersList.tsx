import React from 'react';
import {useAppDispatch, useAppSelector} from '../../store/hooks/usersHooks';
import {Table} from "antd";

enum UsersTableColumn {
    Photo = 'photo',
    Name = 'name',
    Email = 'email'
}

const columns = [
    {
        title: UsersTableColumn.Photo,
        dataIndex: UsersTableColumn.Photo,
        key: UsersTableColumn.Photo
    },
    {
        title: UsersTableColumn.Name,
        dataIndex: UsersTableColumn.Name,
        key: UsersTableColumn.Name
    },
    {
        title: UsersTableColumn.Email,
        dataIndex: UsersTableColumn.Email,
        key: UsersTableColumn.Email
    }
];

export function UsersList() {
    const users = useAppSelector(state => state.users);
    const dispatch = useAppDispatch();

    return <Table columns={columns} dataSource={undefined}/>;
}
