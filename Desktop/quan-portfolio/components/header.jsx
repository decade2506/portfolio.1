'use client'

import Link from "next/link";
import { Button } from "./ui/button";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import LangChange from "./LangChange";
import { useTranslation } from "@/context/TranslationContext";


const Header = () => {
  const { t } = useTranslation();
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">DECADE</h1>
        </Link>
        {/* dektop nav & hidden button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>{t('header.hireMe')}</Button>
          </Link>
          <LangChange />
        </div>

        {/* Mobile nav*/}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
