import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section aria-label="Hero" className="relative h-98.25  lg:h-127.75 w-full">
      <Image
        src="/hero-image/hero-banner.jpg"
        alt="hero banner"
        fill
        className="object-cover"
        priority
      />

      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* content on top */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 text-center">
        <span className="rounded-full bg-white/20 px-8 py-3 text-sm font-medium uppercase text-white">
          what we do
        </span>
        <h1 className="text-4xl font-bold text-white md:text-5xl">
          Training and Development
        </h1>
        <p className="max-w-2xl text-white/90">
          Our comprehensive range of programs and resources is designed to
          enhance skills, broaden knowledge, and propel careers forward in
          today&apos;s ever-evolving landscape.
        </p>
        <Button
          type="button"
          className="bg-[#571244] hover:bg-[#571244]/90 text-xl rounded-sm py-6 px-3"
        >
          Book a Consultation
        </Button>
      </div>
    </section>
  );
};

export default Hero;
