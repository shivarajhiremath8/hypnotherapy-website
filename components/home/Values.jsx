
const values = [
  {
    id: 1,
    title: "Compassion",
    description:
      "Every client is treated with empathy, respect, and confidentiality.",
  },
  {
    id: 2,
    title: "Integrity",
    description:
      "We are committed to ethical practices and professional standards.",
  },
  {
    id: 3,
    title: "Transformation",
    description:
      "Focusing on lasting results that create true inner change.",
  },
  {
    id: 4,
    title: "Growth",
    description:
      "Empowering individuals to unlock their highest potential.",
  },
  {
    id: 5,
    title: "Trust",
    description:
      "Building safe, supportive, and non-judgmental healing space.",
  },
];

const CoreValues = () => {
  return (
    <section className="bg-[#F9FAFB] py-20" id="values">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-[#1E3A5F] mb-12">
          Our Core Values
        </h2>

        {/* Values Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value) => (
            <div
              key={value.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-8 flex flex-col justify-center items-center min-h-[220px] hover:bg-gradient-to-br hover:from-[#3A6EA5]/5 hover:to-[#1E3A5F]/5"
            >
              <h3 className="text-xl font-semibold text-[#1E3A5F] mb-3">
                {value.title}
              </h3>
              <p className="text-[#4B5563] text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
