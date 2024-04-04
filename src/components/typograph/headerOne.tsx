import '../styles/index.css';

function H1({ children }: { children: string }) {
    return (<h1 className='headerOne'>{children}</h1>);
}

export default H1;