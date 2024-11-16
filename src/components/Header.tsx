import { useState } from "react";
import Image from "next/image";
import Logo from "../images/logo.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="text-gray-600 body-font fixed backdrop-blur-md mx-auto left-0 right-0 z-10 bg-black bg-opacity-50 ">
      <div className="container-custom mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center justify-between">
        <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image src={Logo} alt="Logo" className="w-64" />
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-900 focus:outline-none"
        >
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} size="lg" />
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMobileMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center text-base justify-center w-full md:w-auto`}
        >
          <Link href="/" className="mr-5 menuLink text-white">Home</Link>
          <Link href="/services" className="mr-5 menuLink text-white">Solution</Link>
          <Link href="/portfolio" className="mr-5 menuLink text-white">Portfolio</Link>
          <Link href="/about" className="mr-5 menuLink text-white">About</Link>
          <Link href="/contact" className="mr-5 menuLink text-white">Contact Us</Link>
          <Link href="/careers" className="mr-5 menuLink text-white">Careers</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
