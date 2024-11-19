"use client";

import { Button } from "@/components/ui/button";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import { useTranslation } from "@/context/TranslationContext";

const Home = () => {
  const { t } = useTranslation();

  return (
    <section className="h-gull">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-3xl">{t('home.developer')}</span>
            <h1 className="h1">
              {t('home.hello')} <br />
              <span className="text-accent">{t('home.name')}</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              {t('home.description')}
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span className="w-[25vh]">{t('home.button')}</span>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;