import React from "react";
import logoColor from "../images/logo-color.png";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-gray-100">
      <div className="container px-5 py-20 mx-auto flex md:items-center lg:items-center md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link
            href="/"
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <Image className="pb-8" src={logoColor} alt="Logo" />
          </Link>
          <iframe
            width="400"
            height="200"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Catayst&zoom=17&maptype=satellite "
            style={{
              border: "0",
              position: "relative",
              zIndex: 2,
            }}
          ></iframe>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 justify-end -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-blue-950 uppercase font-bold mb-4">
              Quick Links
            </h2>
            <nav className="list-none mb-10">
              <li className="py-1">
                <Link href="" className="text-black  hover:text-gray-800">
                  Solution
                </Link>
              </li>
              <li className="py-1">
                <Link href="" className="text-black  hover:text-gray-800">
                  About
                </Link>
              </li>
              <li className="py-1">
                <Link href="" className="text-black  hover:text-gray-800">
                  Contact
                </Link>
              </li>
              <li className="py-1">
                <Link href="" className="text-black  hover:text-gray-800">
                  Careers
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-blue-950 uppercase font-bold mb-4">
              Contact US
            </h2>
            <nav className="list-none mb-10">
              <li className="py-1 -ml-7">
                <Link
                  href="tel:+92-21-3439-6242"
                  className="text-black  hover:text-gray-800"
                >
                  <FontAwesomeIcon
                    className="text-blue-950 pr-2"
                    icon={faPhone}
                  />{" "}
                  +92-21-3439-6242
                </Link>
              </li>
              <li className="py-1 -ml-7">
                <Link
                  href="tel:+92-21-3439-6242"
                  className="text-black  hover:text-gray-800"
                >
                  <FontAwesomeIcon
                    className="text-blue-950 pr-2"
                    icon={faPhone}
                  />{" "}
                  +92-21-3439-6242
                </Link>
              </li>
              <li className="py-1 -ml-7">
                <Link
                  href="mailto:info@catalyst.pk"
                  className="text-black  hover:text-gray-800"
                >
                  <FontAwesomeIcon
                    className="text-blue-950 pr-2"
                    icon={faEnvelope}
                  />{" "}
                  info@catalyst.pk
                </Link>
              </li>
              <li className="py-1 -ml-7">
                <Link
                  href="catalyst.pk"
                  className="text-black  hover:text-gray-800"
                >
                  <FontAwesomeIcon
                    className="text-blue-950 pr-2"
                    icon={faGlobe}
                  />{" "}
                  catalyst.pk
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-blue-950 uppercase font-bold mb-4">
              Subscribe
            </h2>
            <nav className="list-none mb-10">
              <form action="">
                <div className="inpSub">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="youremail@outlook.com"
                    className="border border-blue-950 p-2 w-full rounded-lg outline-none"
                  />
                  <button className="bg-blue-950 py-2 px-5 table mt-3 text-white rounded-lg">
                    Submit
                  </button>
                </div>
              </form>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-blue-950">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-white text-sm text-center sm:text-left">
            © 2024 Catalyst —
            <Link
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-white ml-1"
              target="_blank"
            >
              All Rights Resevered
            </Link>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <Link href="" className="text-white">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </Link>
            <Link href="" className="ml-3 text-white">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </Link>
            <Link href="" className="ml-3 text-white">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </Link>
            <Link href="" className="ml-3 text-white">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
