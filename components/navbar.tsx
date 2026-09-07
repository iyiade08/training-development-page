import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { User, ChevronDown } from "lucide-react";
import MobileMenu from "./mobile-menu";
import Navlinks from "./navlinks";

const Navbar = () => {
  return (
    <nav className="flex flex-col">
      <div className="mx-auto flex w-full max-w-360 border-b border-gray-300 items-center justify-between px-6 sm:px-4">
        <Image
          src="/nabvar-image/tobams-logo.png"
          alt="tobams-logo"
          width={160}
          height={48}
        />
        <div className="hidden items-center md:flex gap-3">
          <Button className="flex gap-2 items-center px-3 py-6 bg-[#571244] rounded-sm">
            <span className="w-8 h-8 rounded-full flex bg-[#DDD0DA] items-center justify-center">
              <User size={24} className="w-8 h-8 text-[#571244]" />
            </span>
            <p className="text-white capitalize text-xl">Account</p>
            <ChevronDown className="w-6 h-6" />
          </Button>
          <Button className="capitalize text-xl text-white px-3 py-6 rounded-sm bg-[#EF4353]">
            take assessment
          </Button>
        </div>
        {/* mobile menu */}
        <MobileMenu />
      </div>
      <Navlinks />
    </nav>
  );
};

export default Navbar;
