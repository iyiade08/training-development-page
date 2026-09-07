"use client";
import Image from "next/image";

const MobileMenu = () => {
  return (
    <span className="md:hidden lg:hidden">
      <Image
        src="/nabvar-image/mobile-menu.png"
        alt="mobile menu"
        width={30}
        height={30}
      />
    </span>
  );
};

export default MobileMenu;
