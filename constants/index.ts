import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import carhubImg from "@/public/carhub.png";
import realtorImg from "@/public/realtor.png";
import ecommerceImg from "@/public/ecommerce.png";

// Navigation links
export const LINKS = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// External links
export const EXTRA_LINKS = {
  linkedin: "https://www.linkedin.com/in/sujeet-yadav0070",
  github: "https://github.com/codesujeet",
  resume: "/resume.pdf",
  
  source_code: "https://github.com/codesujeet/portfolio",
  email: "ysujeet0060@gmail.com",
} as const;


// Data for projects
export const PROJECTS_DATA = [
  {
    title: "CarHub",
    description:
      "A web app that is built using NextJS and enables users to quickly search and obtain information about cars.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Headless UI"],
    imageUrl: carhubImg,
    projectUrl: "https://carhb.vercel.app/",
  },
  {
    title: "Realtor",
    description:
      "Buy and rent homes for everyone. I was the front-end developer. It has features like filtering, sorting, and pagination.",
    tags: ["React", "Chakra UI", "Next.js", "Framer Motion", "React Icons"],
    imageUrl: realtorImg,
    projectUrl: "https://real-estate-app-react.vercel.app/",
  },
  {
    title: "ECommerce Store",
    description:
      "A NextJS-based eCommerce store that allows users to order different products. It supports real-time payments using Stripe.",
    tags: ["React", "Next.js", "Sanity", "React Router", "Stripe"],
    imageUrl: ecommerceImg,
    projectUrl: "https://ecommerce-app-next.vercel.app/",
  },
] as const;

// Data for skills
export const SKILLS_DATA = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Three.js",
  "MySQL",
  "Express",
  "Python",
 "Docker",
  "Figma",
  "linux",
  "vercel",
  "AWS amplify"
] as const;

// Owner name
export const OWNER_NAME = "Sujeet Yadav";
