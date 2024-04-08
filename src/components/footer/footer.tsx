import { EnvironmentVariables } from "../../utils";

function Footer() {
    const { VITE_APP_VERSION } = EnvironmentVariables()

    return (<footer>v.{VITE_APP_VERSION}</footer>);
}

export { Footer as default }