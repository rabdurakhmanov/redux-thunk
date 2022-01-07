import { Layout } from 'antd';
import './AppLayout.css';

interface AppLayoutProps {
    cssName?: string;
    children?: JSX.Element;
}

export function AppLayout({ cssName, children }: AppLayoutProps) {
    return <Layout className={cssName ? `layout ${cssName}` : 'layout'} children={children} />;
}
