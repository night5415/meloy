import { Outlet } from 'react-router-dom';

function Content() {
    return (<main>
        <Outlet />
    </main>);
}

export { Content as default }