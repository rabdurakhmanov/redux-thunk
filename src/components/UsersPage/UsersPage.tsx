import { Table, Tag } from 'antd';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UsersListItem } from '../../store/models/user.model';
import { useStoreDispatch, useStoreSelector } from '../../store/store';
import { fetchUsers } from '../../store/thunks/user.thunk';
import { AppLayout } from '../AppLayout/AppLayout';
import '../AppLayout/AppLayout.css';
import { AppSpin } from '../AppSpin/AppSpin';

enum UsersTableColumn {
    Login = 'login',
    Id = 'id',
    Type = 'type',
    SiteAdmin = 'siteAdmin'
}

enum UsersTableColumnTitle {
    Login = 'Login',
    Id = 'Id',
    Type = 'Type',
    SiteAdmin = 'Is admin?'
}

export function UsersPage() {
    const { value: users } = useStoreSelector(state => state.users);
    const dispatch = useStoreDispatch();
    const { Column } = Table;
    let loading = false;

    useEffect(() => {
        if (!users.length) {
            dispatch(fetchUsers()).then(() => {
                loading = true;
            });
        }
    }, []);

    if (loading) {
        return <AppSpin />;
    }

    return <AppLayout>
        <Table dataSource={users} className='userspage-table'>
            <Column title={UsersTableColumnTitle.Login} dataIndex={UsersTableColumn.Login} key={UsersTableColumn.Login} />
            <Column title={UsersTableColumnTitle.Type} dataIndex={UsersTableColumn.Type} key={UsersTableColumn.Type}
                render={type => <Tag color='green'>{type}</Tag>} />
            <Column title={UsersTableColumnTitle.SiteAdmin} dataIndex={UsersTableColumn.SiteAdmin} key={UsersTableColumn.SiteAdmin}
                render={isAdmin => <Tag color={isAdmin ? 'blue' : 'red'}>{isAdmin ? 'Yes' : 'No'}</Tag>} />
            <Column
                title="Action"
                key="action"
                render={(_, record: UsersListItem) => (<Link to={record.login}>more</Link>)}
            />
        </Table>
    </AppLayout>;
}
