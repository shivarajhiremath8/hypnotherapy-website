import NavBar from "../components/common/NavBar";
import Services from "../components/home/Services";
import Benefits from "../components/home/Benefits";
import Values from "../components/home/Values";
import Footer from "../components/common/Footer";

const ServicesPage = () => {
    return (
        <>
            <NavBar />
            <div className="pt-12">
                <Services />
            </div>
            <Benefits />
            <Values />
            <Footer />
        </>
    );
};

export default ServicesPage;
