// Import necessary dependencies and components.
"use client"; // This comment indicates that this code should run on the client side in Next.js.

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

import { EXTRA_LINKS, OWNER_NAME } from "@/constants";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";


// Define the Intro component.
const Intro = () => {
  // Use the 'useSectionInView' hook to track section visibility.
  const { ref } = useSectionInView("Home", 0.5);
  // Use the 'useActiveSectionContext' to manage active sections and clicks.
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/profile.jpeg"
              alt={`${OWNER_NAME.split(" ")[0]} portrait`}
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute bottom-0 right-0 text-2xl"
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <b className="font-bold">Hi, I&apos;m {OWNER_NAME.split(" ")[0]}.</b>{" "}
        I&apos;m a <b className="font-bold">WEB developer</b><br></br> with{" "}
        <b className="font-bold">2+ years</b> of experience. I enjoy building Tech.
        
        currently expanding my expertise into the realm of DevSecOps engineer
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col items-center justify-center gap-y-4 sm:flex-row sm:gap-x-2"
      >
        <div className="flex flex-col gap-2 text-lg font-medium sm:flex-row">
          <Link
            href="#contact"
            className="flex items-center gap-2 py-3 text-white transition bg-gray-900 rounded-full outline-none group px-7 focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-95"
            onClick={() => {
              // Set the active section and the time of the last click.
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me
            <BsArrowRight className="opacity-70 group-hover:translate-x-0.5 transition" />
          </Link>

          <Link
            href="https://drive.google.com/file/d/1ViuD-PtY3Rk2iUIepPvzZmzCJ13nUSa5/view?usp=drive_link"
            target="_blank"
            className="flex items-center gap-2 py-3 transition bg-white rounded-full outline-none group px-7 focus:scale-105 hover:scale-105 active:scale-95 borderBlack dark:bg-white/10"
          >
            My Resume
            <HiDownload className="opacity-60 group-hover:translate-y-0.5 transition" />
          </Link>
        </div>
        <div className="flex gap-2 text-lg font-medium">
          <Link
            href={EXTRA_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.1] hover:scale-[1.1] active:scale-95 hover:text-gray-950 transition borderBlack dark:bg-white/10 dark:text-white/60"
            aria-label="Linkedin"
            title="Linkedin"
          >
            <BsLinkedin />
          </Link>

          <Link
            href={EXTRA_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full outline-none focus:scale-[1.1] hover:scale-[1.1] active:scale-95 hover:text-gray-950 transition borderBlack dark:bg-white/10 dark:text-white/60"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithubSquare />
          </Link>

        </div>
      </motion.div>
    
    </section>
  );
};

export default Intro;
