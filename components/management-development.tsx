import Image from "next/image";
import { Zap } from "lucide-react";

const highlights = [
  "Enhanced Leadership Skills",
  "Improved Employee Engagement",
  "Stronger Organisational Culture",
  "Sustainable Growth",
];

const ManagementDevelopment = () => {
  return (
    <section
      aria-label="Management Development"
      className="mt-7 flex flex-col gap-6 rounded-2xl bg-[#2B0A24] p-4 lg:flex-row lg:items-center lg:gap-10 lg:p-6"
    >
      {/* image */}
      <div className="w-full lg:w-1/2">
        <Image
          src="/management-image/management-image.png"
          alt="management development program"
          width={602}
          height={346}
          className="h-full w-full rounded-xl object-cover"
        />
      </div>

      {/* content */}
      <div className="flex w-full flex-col gap-4 lg:w-1/2">
        <h1 className="text-2xl font-semibold text-white lg:text-3xl">
          Management Development Program
        </h1>

        <div className="flex flex-col gap-4 text-sm text-white/80 lg:text-base">
          <p>
            Tobams Group offers a comprehensive Management Development Program
            designed to equip corporate organisations with the high-performing
            leaders they need to thrive.
          </p>
          <p>
            Our program includes workshops, seminars, coaching sessions, online
            courses, and experiential learning opportunities designed to improve
            leadership, strategic thinking, communication, and other essential
            managerial competencies for corporate organisations.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {highlights.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 rounded-md bg-[#8F6182] px-4 py-3 text-white"
            >
              <Zap className="h-4 w-4 shrink-0 fill-white text-white" />
              <p className="text-sm lg:text-base">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagementDevelopment;
