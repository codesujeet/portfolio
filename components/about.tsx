// client-side component
"use client";

// Import necessary dependencies and components.
import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";

import SectionHeading from "./section-heading";

// Define the About component.
const About = () => {
  // Use the useSectionInView custom hook to track when the "About" section is in view.
  const { ref } = useSectionInView("About");

  // Return the About section, which uses framer-motion for animations.
  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      {/* Display the section heading for "About me." */}
      <SectionHeading>About me</SectionHeading>

      {/* Display a paragraph with information about the user's background and interests. */}
      <p className="mb-3">
      As a student with a passion for continuous learning in web development and cybersecurity,
       I am now expanding my expertise by learning DevSecOps. Proficient in front-end and back-end 
       technologies such as HTML, CSS, JavaScript, React.js, and Next.js, and various frameworks 
       I am committed to integrating security practices throughout the development lifecycle. I stay 
       updated on the latest trends and best practices in cybersecurity to ensure digital asset
        protection. With a patient and persistent approach to problem-solving, coupled with my 
        enthusiasm for learning, I adapt quickly to new challenges, technologies, and the evolving
         landscape of DevSecOps.
      </p>

      {/* Display another paragraph about the user's interests and hobbies. */}
     
    </motion.section>
  );
};

// Export the About component.
export default About;
