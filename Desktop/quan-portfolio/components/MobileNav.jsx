"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { CiMenuBurger } from "react-icons/ci";
import Link from "next/link";
import { useEffect, useState} from "react";
import LangChange from "./LangChange";

const links = [
  {
    name: "home",
    path: "/",
  },
  // {
  //     name: 'services',
  //     path: '/services'
  // },
  {
    name: "resume",
    path: "/resume",
  },
  // {
  //     name: 'work',
  //     path: '/work'
  // },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuBurger className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">DECADE</h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <div className="flex justify-center items-center mt-4">
          <LangChange />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
