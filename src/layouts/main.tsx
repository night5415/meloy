import { Header, Navigation, Content, Footer, MobileNavigation } from "../components";

interface IMainLayoutProps {

}

function MainLayout({ }: IMainLayoutProps) {
    return (<div className="layout">
        <Header />
        <Navigation />
        <Content />
        <Footer />
        <MobileNavigation />
    </div>);
}

export { MainLayout as default };