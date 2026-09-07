import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const courses = [
  "Business Analysis",
  "Design Thinking",
  "Effective Communication",
  "Entrepreneurship",
  "Career Development",
  "Business Model",
];

const LearningManagement = () => {
  return (
    <section
      aria-label="Learning Management System"
      className="mt-7 w-[375px] mx-auto md:w-auto flex flex-col items-center gap-8 bg-[#5712441A] px-4 py-10 lg:flex-row lg:items-center lg:justify-center lg:gap-16 lg:px-16"
    >
      <h1 className="flex text-xl font-bold capitalize text-[#571244] lg:hidden">
        Learning Management System
      </h1>

      {/* image */}
      <div className="flex aspect-square  w-[280px] md:w-[400px] shrink-0 overflow-hidden rounded-full lg:w-[420px] lg:max-w-none">
        <Image
          src="/learning-management-image/Learning-management-img.jpg"
          alt="management-banner"
          width={556}
          height={568}
          className="h-full w-full object-cover"
        />
      </div>

      {/* content */}
      <div className="flex w-full  flex-1 flex-col items-center gap-4 text-center lg:items-start lg:text-left">
        <h1 className="hidden text-4xl font-bold capitalize text-[#571244] lg:flex">
          Learning Management System
        </h1>

        <div className="flex w-full flex-col gap-2 rounded-lg bg-[#5712441A] p-4 lg:p-6">
          <p className="text-base text-[#151515] md:text-xl lg:text-xl">
            TG Academy is a hub of knowledge and skill-building resources
            designed to empower tech talents on their learning journey. From
            technical courses covering the latest programming languages and
            development frameworks to soft skills training in leadership,
            effective communication and project management, TG Academy offers a
            wide range of courses to cater to diverse learning needs. With
            accessible and interactive learning materials, individuals can
            enhance their skills and stay ahead in today&apos;s competitive tech
            landscape.
          </p>

          <h2 className="text-xl self-start font-semibold capitalize text-[#571244]">
            Some of our courses include:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 lg:grid-cols-3">
            {courses.map((course) => (
              <div key={course} className="flex items-center gap-2">
                <div className="h-2 w-2 shrink-0 rounded-full bg-black" />
                <p className="text-base capitalize lg:text-lg">{course}</p>
              </div>
            ))}
          </div>
        </div>

        <button className="mt-2 flex items-center gap-2 self-start rounded-md bg-[#571244] px-5 py-3 text-white capitalize lg:self-start">
          Learn More
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
};

export default LearningManagement;
