"use client";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const navItems = [
  { id: "about", label: "About", href: "/", hasDropdown: true },
  { id: "whatwedo", label: "what we do", href: "/", hasDropdown: true },
  { id: "jobs", label: "jobs", href: "/", hasDropdown: true },
  { id: "projects", label: "projects", href: "/", hasDropdown: false },
  {
    id: "patnership",
    label: "startegic patnership",
    href: "/",
    hasDropdown: false,
  },
  { id: "pricing", label: "pricing", href: "/", hasDropdown: false },
  {
    id: "consultation",
    label: "book a consultation",
    href: "/",
    hasDropdown: false,
  },
];

const Navlinks = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="mx-auto hidden w-full md:gap-4 justify-center max-w-261.25 flex-wrap items-center gap-3 px-4 mt-6 md:flex lg:flex-nowrap lg:gap-6 lg:px-6">
      {navItems.map((item) => (
        <div
          key={item.id}
          onClick={() => setActiveTab(item.id)}
          className={`flex items-center gap-1 whitespace-nowrap ${
            activeTab === item.id
              ? "text-[#571244] border-b-2 border-[#571244]"
              : "text-[#151515]"
          }`}
        >
          <Link
            href={item.href}
            className="text-sm capitalize md:text-xl lg:text-2xl"
          >
            {item.label}
          </Link>
          {item.hasDropdown && (
            <ChevronDown className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Navlinks;
