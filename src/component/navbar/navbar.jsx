import React from "react";
import Image from "next/image";
import logo from "../../../public/Images/logo.svg";
import Link from "next/link";
import LanguageSelector from "../LangSwich/langSwitch";

const Navbar = () => {
  return (
    <>
      <nav className="w-full flex border-b-[2px] border-[#1F5D58] bg-[#FFF3F4] p-5">
        <div className="flex w-full">
          <div className="flex flex-grow">
            <Link href="/">
              <Image src={logo} unoptimized alt="logo" className="" />
            </Link>
          </div>
          <div className="flex ml-auto">
            <LanguageSelector />
          </div>
        </div>
      </nav>
      <hr className="w-full border-b-[1px] border-[#1F5D58]" />
    </>
  );
};

export default Navbar;
