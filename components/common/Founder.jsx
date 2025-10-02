import FounderImage from '../../assets/images/hero1.jpg';

const Founder = () => {
    return (
        <div className="py-14 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-10 mt-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-secondary text-gray-800 mb-4">
                        The Visionary Behind Milking
                    </h2>
                    <p className="text-gray-600 max-w-4xl mx-auto text-center font-primary leading-relaxed text-lg">
                        Founded by Dr. M. C. Rangaswamy, a nationally awarded farmer-entrepreneur, Milking is
                        built on decades of expertise in ethical and science-led farming. His awards celebrate
                        innovation, sustainability, and leadership in Indian dairy.
                    </p>
                </div>

                {/* Founder Image */}
                <div className="flex justify-center">
                    <div className="w-full max-w-2xl">
                        <img
                            src={FounderImage}
                            alt="Dr. M. C. Rangaswamy receiving national award"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Founder;