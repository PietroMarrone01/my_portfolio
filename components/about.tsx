"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am Pietro Marrone, and I was born in Bari, Italy. I recently pursued my Master's in{" "}
        <span className="font-medium">Computer Networks and Cloud Computing</span>, 
        with a keen interest in the {" "}
        <span className="font-medium">IoT, cybersecurity and cloud world</span>.{" "}
        <span className="italic">I am driven by a persistent curiosity, meticulous attention to detail and a firm commitment to learning</span> 
        , always seeking to expand my skill set and knowledge base. 
        When faced with challenges, I approach them with determination and dedication, giving my utmost to find solutions and achieve our shared objectives. 
      </p>

      <p>
        <span className="italic">When I'm not studying</span>, I enjoy doing any kind of sport, 
        watching tv series and reading books. I also like to learn new things, travel, meet new people and know new cultures.
      </p>
    </motion.section>
  );
}
