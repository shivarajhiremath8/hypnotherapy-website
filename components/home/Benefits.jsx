import Icon from "../../assets/icons/b2.svg"; // adjust the path if needed

const benefits = [
    "Reduce frequency & intensity of migraines.",
    "Experience deep relaxation & stress relief.",
    "Achieve inner calm & emotional balance.",
    "Build resilience to handle life’s challenges with ease.",
    "Fall asleep faster & enjoy deep, restful sleep.",
    "Wake up refreshed & energized.",
    "Restore natural sleep patterns without dependency.",
    "Release emotional pain tied to past experiences.",
    "Reduce flashbacks, fears & avoidance patterns.",
    "Build emotional safety & resilience.",
];

const Benefits = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16 bg-white">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1E3A5F]">
                Key Benefits Clients Can Expect
            </h2>
            <div className="grid md:grid-cols-2 gap-2">
                {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-gradient-to-r hover:from-[#3A6EA5]/5 hover:to-transparent transition duration-300">
                        <img
                            src={Icon}
                            alt="Check Icon"
                            className="w-6 h-6 mt-1 flex-shrink-0"
                        />
                        <p className="text-[#4B5563] font-normal text-base">{benefit}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Benefits;
