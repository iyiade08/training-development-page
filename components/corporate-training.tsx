import Image from "next/image";
import { Zap } from "lucide-react";

const trainings = [
  {
    title: "Corporate Trainings",
    description:
      "Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values.",
    bullets: [
      "Leadership Training",
      "Strategic Planning and Implementation",
      "Project Management",
      "Sustainability Training",
      "Customised Training",
    ],
    image: "/coporate-training-images/coporate-training-image-1.png",
    imageSide: "right",
  },
  {
    title: "Personalised Individual Training",
    description:
      "Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals.",
    bullets: [
      "Leadership Development",
      "Soft Skills Development",
      "Industry Specific Knowledge",
      "Technical Skills Enhancement",
      "Time Management and Productivity",
      "Career Development",
    ],
    image: "/coporate-training-images/coporate-training-image-2.png",
    imageSide: "left",
  },
  {
    title: "Capacity Development",
    description:
      "At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:",
    bullets: [
      "Tailored Training Programs",
      "Expert-Led Workshops",
      "Personalized Mentorship",
      "Technical Skills Enhancement",
      "Collaborative Learning Environment",
      "Ongoing Support and Resources",
    ],
    image: "/coporate-training-images/coporate-training-image-3.png",
    imageSide: "right",
  },
];

const CooperateTraining = () => {
  return (
    <section
      aria-label="coporate training"
      className="mt-7 flex flex-col gap-12 p-4 lg:gap-16 lg:px-16"
    >
      {trainings.map((item) => (
        <div
          key={item.title}
          className={`flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10 ${
            item.imageSide === "right" ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* title - mobile only, appears above image */}
          <h1 className="text-2xl font-semibold text-[#151515] lg:hidden">
            {item.title}
          </h1>

          {/* image */}
          <div className="w-full lg:w-1/2">
            <Image
              src={item.image}
              alt={item.title}
              width={602}
              height={346}
              className="h-full w-full rounded-lg object-cover"
            />
          </div>

          {/* text */}
          <div className="flex w-full flex-col gap-3 lg:w-1/2">
            {/* title - desktop only, appears inside text column */}
            <h1 className="hidden text-2xl font-semibold text-[#151515] lg:block">
              {item.title}
            </h1>
            <p className="text-base text-[#151515]">{item.description}</p>
            <ul className="flex flex-col gap-2">
              {item.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-center gap-2 text-base text-[#151515]"
                >
                  <Zap className="w-4 h-4 fill-[#571244] text-[#571244]" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CooperateTraining;
