import { List, Table } from 'antd';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStoreDispatch, useStoreSelector } from '../../store/hooks/storeHooks';
import { fetchUsers } from '../../store/thunks/usersThunk';

enum UsersTableColumn {
    Login = 'login',
    Id = 'id',
    Type = 'type',
    SiteAdmin = 'site_admin'
}

const { Column } = Table;

export function UsersTable(): JSX.Element {
    const { value } = useStoreSelector(state => state.users);
    const dispatch = useStoreDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return <List itemLayout="horizontal" dataSource={value} renderItem={item => <Link to={item.login}>
        <List.Item>
            <List.Item.Meta title={item.login} description={item.type} />
        </List.Item>
    </Link>} />
}
