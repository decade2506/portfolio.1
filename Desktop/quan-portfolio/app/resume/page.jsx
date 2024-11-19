"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { useTranslation } from "@/context/TranslationContext";

const Resume = () => {
  const { t } = useTranslation();

  const about = {
    info: [
      {
        fieldname: t('resume.fields.name'),
        fieldValue: t('resume.fields.myname'),
      },
      {
        fieldname: t('resume.fields.phone'),
        fieldValue: "(+84) 834 237 147",
      },
      {
        fieldname: t('resume.fields.experience'),
        fieldValue: "0+ " + t('resume.fields.years'),
      },
      {
        fieldname: t('resume.fields.nationality'),
        fieldValue: t('resume.fields.nationalityValue'),
      },
      {
        fieldname: t('resume.fields.languages'),
        fieldValue: t('resume.fields.languagesValue'),
      },
      {
        fieldname: t('resume.fields.email'),
        fieldValue: "minhquan10.adv@gmail.com",
      },
    ],
  };

  const education = {
    items: [
      {
        institution: t('resume.education.institution'),
        degree: t('resume.education.degree'),
        duration: "2021-2024",
      },
      {
        institution: "Coursera",
        degree: t('resume.education.degree3'), 
        duration: "2024",
      },
      {
        institution: "Coursera",
        degree: t('resume.education.degree3'),
        duration: "2024",
      },
      {
        institution: t('resume.education.institution2'),
        degree: t('resume.education.degree2'),
        duration: "2024-"+t('resume.education.duration'),
      },
    ],
  };

  const skills = {
    skillList: [
      { icon: <FaHtml5 />, name: "HTML 5" },
      { icon: <FaCss3 />, name: "CSS 3" },
      { icon: <FaJs />, name: "Javascript" },
      { icon: <FaReact />, name: "React.js" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <FaFigma />, name: "Figma" },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.1, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">{t('resume.tabs.experience')}</TabsTrigger>
            <TabsTrigger value="education">{t('resume.tabs.education')}</TabsTrigger>
            <TabsTrigger value="skills">{t('resume.tabs.skills')}</TabsTrigger>
            <TabsTrigger value="about">{t('resume.tabs.about')}</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* Experience Tab */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{t('resume.experience.title')}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {t('resume.experience.description')}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    <li className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                      <span className="text-accent">{t('resume.experience.positions.duration')}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                        {t('resume.experience.positions.intern')}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/60">{t('resume.experience.positions.company')}</p>
                      </div>
                    </li>
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{t('resume.education.title')}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {t('resume.education.description')}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{t('resume.skills.title')}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {t('resume.skills.description')}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* About Tab */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{t('resume.aboutMe')}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {t('resume.aboutDescription')}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldname}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
