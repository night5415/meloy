import { Link } from "react-router-dom";
function Navigation() {
    return (<nav>
        <Link to="/">Home</Link>
        <Link to="/blog/">Blog</Link>
        <Link to="/html/">HTML</Link>
        <Link to="/css/">CSS</Link>
        <Link to="/javascript/">JavaScript</Link>
        <Link to="/settings/">Settings</Link>
    </nav>);
}

export { Navigation as default };