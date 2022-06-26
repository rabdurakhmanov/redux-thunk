import { Layout } from "antd";
import "./AppLayout.scss";

interface AppLayoutProps {
    cssName?: string;
    children?: JSX.Element;
}

export const AppLayout = function ({ cssName, children }: AppLayoutProps) {
    return (
        <Layout
            className={cssName ? `layout ${cssName}` : "layout"}
            children={children}
        />
    );
};
