"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "@/context/TranslationContext";

const Contact = () => {
  const { t } = useTranslation();

  const info = [
    {
      icon: <FaPhoneAlt />,
      title: t('contact.info.phone'),
      description: "(+84) 834 237 147",
    },
    {
      icon: <FaEnvelope />,
      title: t('contact.info.email'),
      description: "minhquan10.adv@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: t('contact.info.address'),
      description: t('contact.info.addressValue'),
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.1, duration: 0.5, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">{t('contact.workTogether')}</h3>
              <p className="text-white/60">{t('contact.contactInfo')}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder={t('contact.form.firstname')} />
                <Input type="lastname" placeholder={t('contact.form.lastname')} />
                <Input type="email" placeholder={t('contact.form.email')} />
                <Input type="phone" placeholder={t('contact.form.phone')} />
              </div>
              <Textarea
                className="h-[300px]"
                placeholder={t('contact.form.message')}
              />
              <Button size="md" className="max-w-50">
                {t('contact.form.send')}
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
