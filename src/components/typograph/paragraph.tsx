import '../styles/index.css';

function Paragraph({ children }: { children: string }) {
    return (<p className='paragraph'>{children}</p>);
}

export { Paragraph as default };