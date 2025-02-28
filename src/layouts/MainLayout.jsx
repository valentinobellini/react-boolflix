import { Outlet } from "react-router-dom";

// importa componenti
import Header from "./../components/Header";
import Footer from "./../components/Footer";

export default function MainLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}