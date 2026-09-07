import { ArrowUpRight } from "lucide-react";

const features = [
  {
    title: "Expert-Led Learning",
    description:
      "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
  },
  {
    title: "Comprehensive Curriculum",
    description:
      "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
  },
  {
    title: "Interactive Workshops",
    description:
      "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
  },
  {
    title: "Global Recognition",
    description:
      "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.",
  },
];

const TrainingTheConsultant = () => {
  return (
    <div className="mt-7 flex flex-col gap-4 p-4 lg:p-8 bg-[#5712441A]">
      <h1 className="text-2xl font-semibold text-[#571244] lg:text-3xl">
        Training The Consultant
      </h1>

      <p className="text-sm font-medium text-[#151515] lg:text-base">
        Maximise Your Potential as a Certified Trainer:
      </p>

      <p className="text-sm text-[#151515] lg:text-base">
        With the help of our Training Consultants program, take a revolutionary
        step toward becoming a distinguished certified training consultant.
        Learn from professionals in the field, immerse yourself in a thorough
        curriculum, and hone your training methods through interactive
        workshops. Participating in our program will enable you to gain
        expertise in diverse courses while also developing the abilities to
        mentor and encourage others in their career advancement.
      </p>

      <div className="grid grid-cols-1 gap-x-10 gap-y-6 rounded-lg bg-[#571244] p-6 text-white lg:grid-cols-2 lg:p-10">
        {features.map((item) => (
          <div key={item.title} className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-sm text-white/80 lg:text-base">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <button className="mt-2 flex w-fit items-center gap-2 rounded-md bg-[#571244] px-5 py-3 text-white">
        Learn More
        <ArrowUpRight className="h-4 w-4" />
      </button>
    </div>
  );
};

export default TrainingTheConsultant;
