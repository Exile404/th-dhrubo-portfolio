"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

import { UseSectionInView } from "@/lib/hooks";
import { UseActiveSectionContext } from "@/context/active-section-context";

export default function intro() {
  const { ref } = UseSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = UseActiveSectionContext();

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
              src={`/Profile.png`}
              alt="Dhrubo portrait"
              width="400"
              height="400"
              quality="100"
              priority={true}
              className="h-36 w-36 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
          
          </motion.span>
        </div>
      </div>

      <motion.h1
      className="mb-10 mt-4 px-4 text-sm font-sans !leading-[1.5] sm:text-4xl"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      >
      <div className="text-xl">
      <span className="font-bold">Hello, I&apos;m Dhrubo.</span> I blend{" "}
<span className="font-bold">Data Science</span> and{" "}
<span className="font-bold">Software Engineering</span> to craft{" "}
<span className="italic">smart, scalable, and impactful AI solutions</span>.{" "}
From{" "}
<span className="underline">ML pipelines</span> to{" "}
<span className="underline">AI-powered applications</span>, my work bridges{" "}
<span className="italic">innovation and execution</span>.{" "}
Published in ACM and IEEE, fluent in{" "}
<span className="underline">Python, Scikit-learn, and Docker</span>.
</div>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/Resume.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/thdhrubo/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/Exile404"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
