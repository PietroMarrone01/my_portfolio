import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import foodrecovery from "@/public/foodrecovery.png";
import sdn from "@/public/sdn.png";
import dectnr from "@/public/NRpluslogo.png";

export const links = [
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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Politecnico di Bari",
    location: "Bari, Italy",
    description:
      "Bachelor's degree in Computer and Automation Engineering with a score of 110/110 with honors",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2022",
  },
  {
    title: "Politecnico di Torino",
    location: "Torino, Italy",
    description:
      "Master's Degree in Computer Engineering – Computer Networks and Cloud Computing. Thesis in: Exploring Device-to-Device (D2D) Communication in Cellular Technology, 5G and Beyond",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2024",
  },
  {
    title: "DTU (Danmarks Tekniske Universitet)",
    location: "Copenaghen, Denmark",
    description:
      "International program E+/EU PROGRAM COUNTRIES 2023/2024 - Courses and final project (courses and thesis preparation)",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Master's Thesis",
    description:
      "Exploring Device-to-Device (D2D) Communication in Cellular Technology: 5G and Beyond",
    tags: ["DECT NR+", "IoT", "5G", "D2D Communication", "Nordic Semiconductor", "nRF9161 DK"],
    imageUrl: dectnr,
    githubUrl: "",  // URL specifico per GitHub
    documentationUrl: "https://drive.google.com/file/d/1rNGAPD0XaFuHnnd2DEj4MWty_5RrF_YM/view?usp=sharing",  
  },
  {
    title: "Rescuing Surplus Food (Too Good To Go)",
    description:
      "Design and implementation of a web application aimed at recovering excess food from shops and restaurants.",
    tags: ["React", "Next.js", "SQLite", "Passport.js", "HTML", "CSS"],
    imageUrl: foodrecovery,
    githubUrl: "https://github.com/PietroMarrone01/Food-Recovery",  // URL specifico per GitHub
    documentationUrl: "https://drive.google.com/file/d/1L_ZM8Sw6gFoAC3JW9WAMefKk7iHVtyZt/view?usp=sharing",  
  },
  {
    title: "Authentication Service - SDN",
    description:
      "Project designed to guarantee the security and efficient management of traffic in a virtual network created with Mininet.",
    tags: ["ONOS CONTROLLER", "MININET", "FLASK SERVER"],
    imageUrl: sdn,
    githubUrl: "https://github.com/PietroMarrone01/AUTHENTICATION-SERVICE-SDN",  // URL specifico per GitHub
    documentationUrl: "https://drive.google.com/file/d/1ORRxMbRfCzZOtCUlXmuRx8Ak0C4awuXc/view?usp=sharing",  
  },
] as const; 

export const skillsData = [
  "GitHub",
  "Node.js",
  "JavaScript",
  "React",
  "Linux Virtualization",
  "Linux Shell",
  "Mininet",
  "ONOS Controller",
  "Cybersecurity",
  "C",
  "Rust",
  "Python",
  "Matlab",
  "PL/SQL",
  "Google Cloud Platform",
  "Vertex AI",
] as const;
