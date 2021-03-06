import { Button, Card, Col, Empty, Image, Row } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AppSpin } from "../../components/AppSpin/AppSpin";
import { AppLayout } from "../../layouts/AppLayout/AppLayout";
import "../../layouts/AppLayout/AppLayout.scss";
import { onClearUser } from "../../store/actions/user.actions";
import {
    useStoreDispatch,
    useStoreSelector,
    useThunkDispatch
} from "../../store/store";
import { fetchUser } from "../../store/thunks/user.thunk";
import "./UserPage.scss";

export const UserPage = function () {
    const { userName } = useParams();
    const { value: user } = useStoreSelector((store) => store.user);
    const navigate = useNavigate();
    const thunkDispatch = useThunkDispatch();
    const storeDispatch = useStoreDispatch();
    const { Meta } = Card;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (userName) {
            thunkDispatch(fetchUser(userName)).then(() => {
                setLoading(false);
            });
        }

        return () => {
            storeDispatch(onClearUser());
        };
    }, []);

    if (!userName) {
        return (
            <AppLayout cssName="layout-centered">
                <Empty
                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                    description="User not found"
                >
                    <Button type="primary" onClick={() => navigate("/")}>
                        Go to users page
                    </Button>
                </Empty>
            </AppLayout>
        );
    }

    if (loading || !user) {
        return <AppSpin />;
    }

    return (
        <AppLayout>
            <Row className="userpage-row">
                <Col span={12}>
                    <Card
                        hoverable
                        cover={
                            <Image
                                alt={user.name}
                                src={user.avatarUrl}
                                width="35%"
                            />
                        }
                        className="userpage-card"
                    >
                        <Meta title={user.name} description={user.htmlUrl} />
                    </Card>
                </Col>
            </Row>
        </AppLayout>
    );
};
