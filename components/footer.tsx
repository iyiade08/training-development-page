import Image from "next/image";
import { FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const whatWeDo = [
  "Sustainability Services",
  "Strategy Planning and Implementation",
  "Tech Talent Solutions",
  "Training and Development",
  "IT Consulting Services",
  "Social Impact",
  "Talent Recruitment",
];

const company = [
  "About",
  "Jobs",
  "Projects",
  "Our Founder",
  "Business Model",
  "The Team",
  "Contact Us",
  "Blog",
  "FAQs",
  "Testimonials",
];

const solution = [
  "Tobams Group Academy",
  "Help a Tech Talent",
  "Campus Ambassadors Program",
  "Join Our Platform",
  "Pricing",
  "Book a Consultation",
  "Join Our Slack Community",
];

const Footer = () => {
  return (
    <footer className="mt-7 bg-[#1A0518] px-4 py-10 text-white lg:px-16 lg:py-16">
      {/* top CTA row */}
      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm text-white/70">
            Ready to be a part of something extraordinary?
          </p>
          <h2 className="text-2xl font-semibold lg:text-3xl">
            Let&apos;s work together to create a difference
          </h2>
        </div>
        <Button className="w-fit rounded-md bg-[#EF4353] px-6 py-5 text-white hover:bg-[#EF4353]/90">
          Get In Touch
        </Button>
      </div>

      <hr className="mb-10 border-white/10" />

      {/* main columns */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        {/* logo + description + socials */}
        <div className="flex flex-col gap-4">
          <Image
            src="/nabvar-image/tobams-logo.png"
            alt="tobams logo"
            width={160}
            height={48}
          />
          <p className="text-sm text-white/70">
            Tobams Group is an innovative consultancy firm reshaping the future
            of tech talent development in Africa, specializing in talent
            acquisition, internships, and skill development with a global
            perspective.
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black border border-white/30"
            >
              <FaLinkedin className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="flex h-9 w-9 items-center bg-white text-black justify-center rounded-full border border-white/30"
            >
              <FaInstagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="flex h-9 w-9 items-center bg-white text-black justify-center rounded-full border border-white/30"
            >
              <FaXTwitter className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* what we do */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold">What We Do</h3>
          <ul className="flex flex-col gap-2 text-sm text-white/70">
            {whatWeDo.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* company */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold">Company</h3>
          <ul className="flex flex-col gap-2 text-sm text-white/70">
            {company.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* solution */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold">Solution</h3>
          <ul className="flex flex-col gap-2 text-sm text-white/70">
            {solution.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="my-10 border-white/10" />

      {/* contact + registered offices */}
      <div className="grid grid-cols-1 gap-6 rounded-lg bg-white/5 p-6 lg:grid-cols-3">
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">Registered Offices</h3>
          <div>
            <p className="text-sm font-medium text-[#EF4353]">United Kingdom</p>
            <p className="text-sm text-white/70">
              07451196 (Registered by Company House)
              <br />
              Vine Cottages, 215 North Street, Romford, Essex, United Kingdom,
              RM1 4QA
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 lg:mt-8">
          <div>
            <p className="text-sm font-medium text-[#EF4353]">Nigeria</p>
            <p className="text-sm text-white/70">
              RC 1048722 (Registered by the Corporate Affairs Commission)
              <br />
              4, Muaz Close, Angwan-Rimi
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">Contact Information</h3>
          <a
            href="mailto:theteam@tobamsgroup.com"
            className="flex items-center gap-2 text-sm text-white/70"
          >
            <Mail className="h-4 w-4" />
            theteam@tobamsgroup.com
          </a>
          <a
            href="tel:+447886600748"
            className="flex items-center gap-2 text-sm text-white/70"
          >
            <Phone className="h-4 w-4" />
            +447886600748
          </a>
        </div>
      </div>

      {/* bottom bar */}
      <div className="mt-10 flex flex-col-reverse items-center gap-4 text-sm text-white/60 lg:flex-row lg:justify-between">
        <p>Copyright © Tobams Group, 2024. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
