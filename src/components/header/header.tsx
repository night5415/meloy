import { H1 } from "../typograph";
import logo from '/me_150.jpg';

function Header() {
    return (
        <header>
            <img src={logo} alt="logo" />
            <H1>Cowboy Coder </H1>
        </header>
    );
}

export { Header as default }