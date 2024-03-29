import { Header, Navigation, Content, Footer } from "../components";

interface IMainLayoutProps {

}

function MainLayout({ }: IMainLayoutProps) {
    return (<div className="layout">
        <Header />
        <Navigation />
        <Content />
        <Footer />
    </div>);
}

export { MainLayout as default };