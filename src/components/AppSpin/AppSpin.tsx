import { Spin } from "antd";
import { AppLayout } from "../../layouts/AppLayout/AppLayout";
import "../../layouts/AppLayout/AppLayout.scss";

export const AppSpin = function () {
    return (
        <AppLayout cssName="layout-centered">
            <Spin size="large" tip="Loding..." />
        </AppLayout>
    );
};
