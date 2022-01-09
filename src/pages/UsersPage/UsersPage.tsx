import { Table, Tag } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppSpin } from '../../components/AppSpin/AppSpin';
import { AppLayout } from '../../layouts/AppLayout/AppLayout';
import '../../layouts/AppLayout/AppLayout.css';
import { UsersListItem } from '../../store/models/user.model';
import { useStoreSelector, useThunkDispatch } from '../../store/store';
import { fetchUsers } from '../../store/thunks/users.thunk';

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

export const UsersPage = function () {
    const { value: users } = useStoreSelector(state => state.users);
    const dispatch = useThunkDispatch();
    const { Column } = Table;
    const [loading, setLoading] = useState(!users.length);

    useEffect(() => {
        if (!users.length) {
            dispatch(fetchUsers()).then(() => {
                setLoading(false);
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
