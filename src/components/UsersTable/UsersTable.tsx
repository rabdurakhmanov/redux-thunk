import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../store/hooks/usersHooks';
import {Table, Tag} from "antd";
import {fetchUsers} from "../../store/thunks/usersThunk";

enum UsersTableColumn {
    Login = 'login',
    Id = 'id',
    Type = 'type',
    SiteAdmin = 'site_admin'
}

const {Column} = Table;

export function UsersTable() {
    const {value} = useAppSelector(state => state.users);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return <Table dataSource={value}>
        <Column title="Id" dataIndex={UsersTableColumn.Id} key={UsersTableColumn.Id}/>
        <Column title="Login" dataIndex={UsersTableColumn.Login} key={UsersTableColumn.Login}/>
        <Column title="Type" dataIndex={UsersTableColumn.Type} key={UsersTableColumn.Type}
                render={type => <Tag color='green'>{type}</Tag>}/>
        <Column title="Is admin" dataIndex={UsersTableColumn.SiteAdmin} key={UsersTableColumn.SiteAdmin}
                render={isAdmin => <Tag color={isAdmin ? 'blue' : 'red'}>{isAdmin ? 'Yes' : 'No'}</Tag>}/>
    </Table>;
}
