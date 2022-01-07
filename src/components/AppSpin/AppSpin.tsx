import { Spin } from 'antd';
import { AppLayout } from '../AppLayout/AppLayout';
import '../AppLayout/AppLayout.css';

export function AppSpin() {
    return <AppLayout cssName='layout-centered'>
        <Spin size='large' tip='Loding...' />
    </AppLayout>;
}
