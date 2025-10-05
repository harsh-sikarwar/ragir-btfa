import Link from "next/link";
import React from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

/**
 * Header Component
 * Navigation bar with responsive logo and CTA button
 * Features hover animations and mobile-responsive design
 */
export default function Header(): React.JSX.Element {
  return (
    <header className=" py-[1.2rem] px-[4rem] shadow_box_bottom">
      <nav className="flex justify-between items-center">
        <Link href="/" className="font-bold">
          <Image src='/logo.svg' width={100} height={100} alt="Logo" className="hidden md:block" />
          <Image src='/mobileLogo.svg' width={100} height={100} alt="Logo" className="md:hidden" />
        </Link>
        <Link href="/">
        <button className="theme_btn_1 group rounded-full px-4 py-[0.8rem] text-[1rem] flex items-center gap-2 transition-all duration-500">
          <span className="group-hover:opacity-0 transition-all duration-300"> For Travelers</span>   <BsArrowRight className="inline-block group-hover:block group-hover:translate-x-[-3rem] transition-all duration-500 group-hover:scale-x-150" size={24} />
        </button>
        </Link>
      </nav>
    </header>
  );
}
