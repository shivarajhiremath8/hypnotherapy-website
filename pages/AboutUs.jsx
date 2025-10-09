
import Navbar from "../components/common/NavBar";
import Founder from "../components/common/Founder";
import Values from "../components/home/Values";
import Gallery from "../components/common/Gallery";
import Footer from "../components/common/Footer";

import Gallery1 from '../assets/images/9.1.jpg';
import Gallery2 from '../assets/images/2.jpg';
import Gallery3 from '../assets/images/8.jpg';
import Gallery4 from '../assets/images/1.jpg';
import Gallery5 from '../assets/images/10.jpg';
import Gallery6 from '../assets/images/4.jpg';

const AboutUs = () => {
    const galleryImages = [
        {
            id: 1,
            src: Gallery1,
            alt: 'Cows in Modern Shelter',
        },
        {
            id: 2,
            src: Gallery2,
            alt: 'Farm Aerial View',
        },
        {
            id: 3,
            src: Gallery3,
            alt: 'Quality Testing Process',
        },
        {
            id: 4,
            src: Gallery4,
            alt: 'Certification Ceremony',
        },
        {
            id: 5,
            src: Gallery5,
            alt: 'Cows Resting Comfortably',
        },
        {
            id: 6,
            src: Gallery6,
            alt: 'Modern Milking Facility',
        }
    ];

    return (
        <div className="font-sans text-gray-800">
            <Navbar />
            <div className="pt-12">
                <Founder />
                <Values />
                <Gallery
                    images={galleryImages}
                    showPrimaryButton={true}
                    showViewMoreButton={false}
                />
            </div>
            <Footer />
        </div>
    );
};

export default AboutUs;
