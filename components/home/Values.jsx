const values = [
  { id: 1, title: "Compassion", description: "Every client is treated with empathy, respect, and confidentiality.", border: "#FECACA33" }, // pink, 20% opacity
  { id: 2, title: "Integrity", description: "We are committed to ethical practices and professional standards.", border: "#FDE68A33" }, // yellow, 20% opacity
  { id: 3, title: "Transformation", description: "Focusing on lasting results that create true inner change.", border: "#C7D2FE33" }, // purple, 20% opacity
  { id: 4, title: "Growth", description: "Empowering individuals to unlock their highest potential.", border: "#BBF7D033" }, // green, 20% opacity
  { id: 5, title: "Trust", description: "Building safe, supportive, and non-judgmental healing space.", border: "#BFDBFE33" }, // blue, 20% opacity
];

const CoreValues = () => {
  return (
    <section className="bg-[#F9FAFB] py-12" id="values">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-10">
          Our Core Values
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value) => (
            <div
              key={value.id}
              className="bg-white/30 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition p-8 flex flex-col justify-center items-center min-h-[220px] hover:bg-gradient-to-br hover:from-[#3A6EA5]/10 hover:to-[#1E3A5F]/10"
              style={{
                border: `2px solid ${value.border}`, // lighter colored border
              }}
            >
              <h3 className="text-xl font-semibold text-[#1E3A5F] mb-3">
                {value.title}
              </h3>
              <p className="text-[#4B5563] font-normal text-sm leading-relaxed">
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
