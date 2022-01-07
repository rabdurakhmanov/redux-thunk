import { Button, Card, Col, Empty, Image, Row } from 'antd';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { clearUser } from '../../store/reducers/user.reducer';
import { useStoreDispatch, useStoreSelector } from '../../store/store';
import { fetchUser } from '../../store/thunks/user.thunk';
import { AppLayout } from '../AppLayout/AppLayout';
import '../AppLayout/AppLayout.css';
import { AppSpin } from '../AppSpin/AppSpin';
import './UserPage.css';

export function UserPage() {
    const { userName } = useParams();
    const { value: user } = useStoreSelector(store => store.user);
    const navigate = useNavigate();
    const dispatch = useStoreDispatch();
    const { Meta } = Card;
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
        return <AppLayout cssName='layout-centered' >
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='User not found'>
                <Button type='primary' onClick={() => navigate('/')}>
                    Go to users page
                </Button>
            </Empty>
        </AppLayout>;
    }

    if (loading || !user) {
        return <AppSpin />;
    }

    return <AppLayout>
        <Row className='userpage-row'>
            <Col span={12}>
                <Card hoverable cover={<Image alt={user.name} src={user.avatarUrl} width='35%' />} className='userpage-card'>
                    <Meta title={user.name} description={user.htmlUrl} />
                </Card>
            </Col>
        </Row>
    </AppLayout>;
}
