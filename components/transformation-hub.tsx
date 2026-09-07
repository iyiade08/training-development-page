import Image from "next/image";
import { Zap, ArrowUpRight } from "lucide-react";

const highlights = [
  "Strategic Career Guidance",
  "CV Development",
  "Communication Skills",
  "Leadership Development",
  "Sustainability Leadership",
  "Business Model",
];

const TransformationHub = () => {
  return (
    <section
      aria-label="Transformation Hub"
      className="mt-7 flex flex-col gap-4 rounded-2xl bg-[#FBE1E5] p-4 lg:p-8"
    >
      <p className="text-sm font-medium italic text-[#1671D9]">
        Learning With Our CEO:
      </p>
      <h1 className="text-2xl font-bold italic text-[#571244] lg:text-3xl">
        Transformation Hub With Jite Newton
      </h1>

      <p className="text-sm text-[#151515] lg:text-base">
        Transformation Hub with Jite Newton is a flagship webinar series curated
        by the CEO, Dr. Jite Newton. Designed to elevate career trajectories and
        leadership capabilities, this exclusive event offers invaluable insights
        and strategies for personal and professional growth. Whether you&apos;re
        seeking to advance your career or enhance your leadership skills, the
        Transformation Hub provides a transformative learning experience to
        unlock your full potential and drive success in your endeavours.
      </p>

      <div className="flex flex-col gap-4 lg:flex-row">
        {/* image */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/transformation-hub-image/transformation-image.png"
            alt="transformation hub with jite newton"
            width={400}
            height={280}
            className="h-full w-full rounded-lg object-cover"
          />
        </div>

        {/* pills + button */}
        <div className="flex w-full self-center flex-col gap-3 lg:w-1/2">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-md bg-white px-4 py-3"
              >
                <Zap className="h-4 w-4 shrink-0  text-[#571244]" />
                <p className="text-sm text-[#151515]">{item}</p>
              </div>
            ))}
          </div>

          <button className="mt-2 flex w-fit items-center gap-2 rounded-md bg-[#571244] px-5 py-3 text-white">
            Learn More
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TransformationHub;
