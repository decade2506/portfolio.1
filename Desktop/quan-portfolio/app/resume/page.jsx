"use-client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "About me",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, fugit! Culpa laudantium repellat odit cum, maxime corrupti.",
  info: [
    {
      fieldname: "Name",
      fieldValue: "Decade",
    },
    {
      fieldname: "Phone",
      fieldValue: "(+40) 321 654 678",
    },
    {
      fieldname: "Experience",
      fieldValue: "0+ Years",
    },
    {
      fieldname: "Skype",
      fieldValue: "Decade2506",
    },
    {
      fieldname: "Nationality",
      fieldValue: "Martian",
    },
    {
      fieldname: "Email",
      fieldValue: "decade.2506@gmail.com",
    },
    {
      fieldname: "Freelance",
      fieldValue: "Non-Available",
    },
    {
      fieldname: "Lanugages",
      fieldValue: "Vietnamese, English",
    },
  ],
};

const eperience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, fugit! Culpa laudantium repellat odit cum, maxime corrupti.",
  items: [
    {
      company: "Tech Solution Inc.",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "Web Design Studio.",
      position: "Front-End Developer intern",
      duration: "Summer 2021",
    },
    {
      company: "E-commerce Startup.",
      position: "Freelance Web Developer",
      duration: "2020 - 2021",
    },
    {
      company: "Tech Academy.",
      position: "Teaching Assistant",
      duration: "2019 - 2020",
    },
    {
      company: "Digital agency.",
      position: "UI/UX Designer",
      duration: "2018 - 2019",
    },
    {
      company: "Software Development Firm.",
      position: "Junior Developer",
      duration: "2017 - 2018",
    },
  ],
};

const education = {
  icon: "/assets/resume/badge.svg",
  title: "My education",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, fugit! Culpa laudantium repellat odit cum, maxime corrupti.",
  items: [
    {
      institution: "Online Course Platform",
      position: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Codecademy",
      position: "Front-end Track",
      duration: "2022",
    },
    {
      institution: "Online Course",
      position: "Programming Course",
      duration: "2020-2021",
    },
    {
      institution: "Tech Institute",
      position: "Certified web Developer",
      duration: "2019",
    },
    {
      institution: "Design School",
      position: "Diploma in Graphic Design",
      duration: "2016-2018",
    },
    {
      institution: "Community College",
      position: "Associate Degreen in Computer Science",
      duration: "2014-2016",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, fugit! Culpa laudantium repellat odit cum, maxime corrupti.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "Css 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwi.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        trasition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-autp xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              experience
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
