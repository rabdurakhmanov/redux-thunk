import { Card, Col, Layout, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { clearUser } from '../../store/reducers/user.reducer';
import { useStoreDispatch, useStoreSelector } from '../../store/store';
import { fetchUser } from '../../store/thunks/user.thunk';

export function UserPage() {
    const { userName } = useParams();
    const { value: user } = useStoreSelector(store => store.user);
    const dispatch = useStoreDispatch();
    let loading = false;

    useEffect(() => {
        if (userName) {
            dispatch(fetchUser(userName)).then(() => {
                loading = true;
            });
        }

        return () => {
            dispatch(clearUser());
        }
    }, []);

    if (loading || !user) {
        return null;
    }

    return <Layout className='layout'>
        <Row className='layout-row'>
            <Col span={12}>
                <Card hoverable cover={<img alt={user.name} src={user.avatarUrl} style={{ maxWidth: '35%' }} />}>
                    <Meta title={user.name} description={user.htmlUrl} />
                </Card>
            </Col>
        </Row>
    </Layout>;
}
