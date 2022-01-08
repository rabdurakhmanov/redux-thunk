import { Spin } from 'antd';
import { AppLayout } from '../../layouts/AppLayout/AppLayout';
import '../../layouts/AppLayout/AppLayout.css';

export const AppSpin = function () {
    return <AppLayout cssName='layout-centered'>
        <Spin size='large' tip='Loding...' />
    </AppLayout>;
}
