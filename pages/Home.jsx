import Footer from "../components/common/Footer";
import Navbar from "../components/common/NavBar";
import Benefits from "../components/home/Benefits";
import CTA from "../components/home/CTA";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Values from "../components/home/Values";

const Home = () => {
    return (
        <>
            <div className="font-sans text-gray-800">
                <Navbar />
                <Hero />
                <Services />
                <Benefits />
                <Values />
                <CTA />
                <Footer />
            </div>
        </>
    );
};

export default Home;
