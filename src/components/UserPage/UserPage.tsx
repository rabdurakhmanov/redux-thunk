import { Button, Card, Col, Empty, Layout, Row, Spin } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { clearUser } from '../../store/reducers/user.reducer';
import { useStoreDispatch, useStoreSelector } from '../../store/store';
import { fetchUser } from '../../store/thunks/user.thunk';
import './UserPage.css';

export function UserPage() {
    const { userName } = useParams();
    const { value: user } = useStoreSelector(store => store.user);
    const navigate = useNavigate();
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

    if (!userName) {
        return <Layout className='layout userpage-layout'>
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='User not found'>
                <Button type='primary' onClick={() => navigate('/')}>
                    Go to users page
                </Button>
            </Empty>
        </Layout>;
    }

    if (loading || !user) {
        return <Layout className='layout userpage-layout'>
            <Spin size='large' tip='Loading...' />
        </Layout>;
    }

    return <Layout className='layout'>
        <Row className='layout-row'>
            <Col span={12}>
                <Card hoverable cover={<img alt={user.name} src={user.avatarUrl} style={{ maxWidth: '35%' }} />} className='userpage-card'>
                    <Meta title={user.name} description={user.htmlUrl} />
                </Card>
            </Col>
        </Row>
    </Layout>;
}
