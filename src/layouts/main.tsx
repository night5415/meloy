import { ReactElement } from "react";

interface IMainLayoutProps {
    children: ReactElement[]
}

function MainLayout({ children }: IMainLayoutProps) {
    return (<div className="layout">
        {children}
    </div>);
}

export { MainLayout as default };