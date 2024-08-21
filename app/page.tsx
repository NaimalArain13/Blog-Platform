import Link from "next/link";
import Image from "next/image";
import {FaLinkedin, FaGithub } from "react-icons/fa"; 
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-cover bg-center">
      {/* Bg image */}
      <div className="absolute inset-0">
        <Image
          src="/bg.jpeg" 
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-50" 
        />
      </div>

      
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center  h-full px-4">
       
        <h1
          className={`text-2xl bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent font-bold mb-9 mt-8 p-1 text-center sm:text-xl md:text-5xl`}
        >
          Unleashing the Power of Innovation
        </h1>

        {/* Subheading */}
        <h2 className="text-3xl text-zinc-300 font-semibold mb-2 text-center sm:text-3xl md:text-2xl">
        Your Source for the Latest Tech Trends
        </h2>
        {/* Text */}
        <p className="text-md text-zinc-200 font-medium mb-6 mt-2 text-center max-w-lg sm:text-md md:text-md">
        Delve into the world of cutting-edge technology, explore insightful
        blog posts, and stay updated on the trends shaping the future.
        </p>
        {/* Social Media Icons */}
        <div className="flex space-x-6 mb-6">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 transition duration-300"
          >
            <FaGithub className="text-2xl sm:text-4xl transform hover:scale-110" />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition duration-300"
          >
            <FaXTwitter className="text-2xl sm:text-4xl transform hover:scale-110" />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-950 transition duration-300"
          >
            <FaLinkedin className="text-2xl sm:text-4xl transform hover:scale-110" />
          </Link>
        </div>

        {/* Button */}
        <Link
          href="/blogs"
          className="mt-4 px-6 py-2 text-sm text-zinc-300  bg-blue-900 rounded-xl hover:bg-blue-950 transition duration-300 text-center font-bold"
        >
          Explore our Blog Posts
        </Link>
      </div>
    </div>
  );
}