import FounderImage from '../../assets/images/12.png';

const Founder = () => {
    return (
        <div className="py-14 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-8 mt-2">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1E3A5F] mb-4">
                        Founder of Nagarjun MindAscend
                    </h2>
                    <p className="text-gray-600 max-w-4xl mx-auto text-center font-primary leading-relaxed text-lg">
                        From a very young age, I was fascinated by the power of the human mind—how it can
                        either hold us back with fear, stress, and habits, or unlock hidden strength, peace, <br></br>and
                        extraordinary potential.
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
                        <p className="text-gray-600 max-w-8xl mx-auto text-center font-primary leading-relaxed text-lg mt-8">
                            Like many professionals, I too faced challenges—stress, self-doubt, and moments where emotions seemed stronger than logic. But instead of letting these struggles control me, I began searching for ways to understand and master the subconscious mind.
                            <br /><br />
                            <b className="whitespace-nowrap"> Today, as Ballari’s first Hypnotherapist and Hypnotherapy Centre founder.</b>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Founder;