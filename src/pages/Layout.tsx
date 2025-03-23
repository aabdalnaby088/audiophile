import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function Layout() {
    return (
        <main>
            <section className="relative">
                <Navbar/>
            </section>
            <section className="mb-10">
                <Outlet/>
            </section>
            <section className="bg-black">
                <Footer/>
            </section>
        </main>
    )
}
