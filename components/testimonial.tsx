"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Aisha Yusuf",
    role: "Founder, CraftHub NG",
    avatar: "/testimonial-image/aisha-testimonial.png",
    quote:
      "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
  },
  {
    name: "John Davies",
    role: "Marketing Manager, E-Commerce Emporium",
    avatar: "/testimonial-image/john-testimonial.png",
    quote:
      "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
  },
  {
    name: "Chinonso Nwankwo",
    role: "HR Director, FutureTech Solutions",
    avatar: "/testimonial-image/chinonso-testimonial.png",
    quote:
      "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
  },
  {
    name: "Sarah Johnson",
    role: "CEO of Tech Innovations Inc.",
    avatar: "/testimonial-images/sarah-johnson.jpg",
    quote:
      "Tobams Group is a true partner in our journey to digital excellence. Their creativity and technical expertise have propelled our projects to new heights. Their work is top-notch, and the results speak for themselves. I can't recommend them enough!",
  },
];

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3; // how many cards show at once on large screens

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // build the visible slice, wrapping around the array if needed
  const visibleTestimonials = Array.from({ length: visibleCount }, (_, i) => {
    return testimonials[(startIndex + i) % testimonials.length];
  });

  return (
    <section
      aria-label="Testimonials"
      className="mx-auto mt-7 w-full max-w-[1045px] px-4"
    >
      <h1 className="mb-8 text-center text-2xl font-semibold text-[#151515] lg:text-3xl">
        Testimonials
      </h1>

      <div className="flex flex-col gap-6 lg:flex-row">
        {/* mobile: show one card */}
        <div className="flex flex-col gap-4 rounded-lg border-l border-[#EF4353] shadow-lg p-6 lg:hidden">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full">
              <Image
                src={testimonials[startIndex].avatar}
                alt={testimonials[startIndex].name}
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-[#151515]">
                {testimonials[startIndex].name}
              </p>
              <p className="text-sm text-[#151515]/60">
                {testimonials[startIndex].role}
              </p>
            </div>
          </div>
          <p className="text-sm text-[#151515]">
            {testimonials[startIndex].quote}
          </p>
        </div>

        {/* desktop: show multiple cards */}
        {visibleTestimonials.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="hidden flex-col gap-4 rounded-lg border-l border-[#EF4353] shadow-lg p-6 lg:flex lg:w-1/3"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-[#151515]">{item.name}</p>
                <p className="text-sm text-[#151515]/60">{item.role}</p>
              </div>
            </div>
            <p className="text-sm text-[#151515]">{item.quote}</p>
          </div>
        ))}
      </div>

      {/* navigation arrows */}
      <div className="mt-6 flex justify-end gap-2">
        <button
          onClick={handlePrev}
          className="flex h-9 w-9 items-center justify-center rounded-full border text-[#571244] hover:bg-[#571244] hover:text-white"
          aria-label="previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={handleNext}
          className="flex h-9 w-9 items-center justify-center rounded-full border text-[#571244] hover:bg-[#571244] hover:text-white"
          aria-label="next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
