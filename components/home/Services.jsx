import icon1 from "../../assets/icons/f7.svg";
import icon2 from "../../assets/icons/f6.svg";
import icon3 from "../../assets/icons/f1.svg";
import icon4 from "../../assets/icons/f2.svg";
import icon5 from "../../assets/icons/f9.svg";
import icon6 from "../../assets/icons/f3.svg";
import icon7 from "../../assets/icons/f5.svg";
import icon8 from "../../assets/icons/f4.svg";

const services = [
  {
    id: 1,
    title: "Migraine Healing & Pain Management",
    description:
      "Specialized hypnotherapy sessions designed to relieve migraines and manage chronic pain effectively.",
    icon: icon1,
  },
  {
    id: 2,
    title: "Stress Relief & Anxiety Management",
    description:
      "Learn powerful techniques to calm your mind, release tension, and manage everyday anxiety.",
    icon: icon2,
  },
  {
    id: 3,
    title: "Sleep Improvement",
    description:
      "Hypnotherapy methods to help you relax deeply and enjoy restful, natural sleep.",
    icon: icon3,
  },
  {
    id: 4,
    title: "Healing from Trauma, PTSD, Phobias & Memories",
    description:
      "Gentle and effective sessions to overcome trauma, phobias, and disturbing past experiences.",
    icon: icon4,
  },
  {
    id: 5,
    title: "Weight Loss & Healthy Lifestyle Management",
    description:
      "Supportive hypnotherapy for weight loss, building healthy habits, and sustaining lifestyle changes.",
    icon: icon5,
  },
  {
    id: 6,
    title: "Emotional Healing & Anger Management",
    description:
      "Release emotional blockages and gain control over anger for healthier relationships.",
    icon: icon6,
  },
  {
    id: 7,
    title: "Child & Teen Support",
    description:
      "Boost focus, confidence, and manage exam stress with tailored sessions for kids and teens.",
    icon: icon7,
  },
  {
    id: 8,
    title: "Habit & Behavior Change",
    description:
      "Break free from overthinking, nail-biting, procrastination, and other unwanted habits.",
    icon: icon8,
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-[#F9FAFB]" id="services">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1E3A5F] mb-12">Our Therapy Services</h2>
        <p className="text-[#4B5563] font-medium max-w-2xl mx-auto mb-12">
          Explore how hypnotherapy can help you heal, transform, and achieve mental and emotional well-being.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 transition duration-300 hover:bg-gradient-to-br hover:from-[#3A6EA5]/5 hover:to-[#1E3A5F]/5"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-16 h-16 mx-auto mb-6"
              />
              <h3 className="text-xl font-semibold text-[#1E3A5F] mb-2">
                {service.title}
              </h3>
              <p className="text-[#4B5563] text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
