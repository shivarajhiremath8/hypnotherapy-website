import ContactUs from "../components/common/ContactForm";
import Navbar from "../components/common/NavBar";

const Contact = () => {
    return (
        <>
            <div className="font-sans text-gray-800">
                <Navbar />
                <ContactUs />
            </div>
        </>
    );
};

export default Contact;
