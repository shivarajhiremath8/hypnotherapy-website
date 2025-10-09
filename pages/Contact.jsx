import ContactUs from "../components/common/ContactForm";
import Navbar from "../components/common/NavBar";
import Footer from "../components/common/Footer";

const Contact = () => {
    return (
        <>
            <div className="font-sans text-gray-800">
                <Navbar />
                <div className="pt-12">
                    <ContactUs />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Contact;
