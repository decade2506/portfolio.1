"use client";

import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "@/context/TranslationContext";

const languages = [
  { label: "English", value: "en" },
  { label: "Tiếng Việt", value: "vi" },
];

const LangChange = () => {
  const { language, setLanguage } = useTranslation();

  return (
    <Select value={language} onValueChange={(value) => setLanguage(value)}>
      <SelectTrigger 
        className="w-[120px] h-[35px] border-accent bg-black text-white text-sm focus:ring-accent"
      >
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent className="bg-black border-accent min-w-[120px]">
        {languages.map((lang) => (
          <SelectItem 
            key={lang.value} 
            value={lang.value}
            className="text-white text-sm focus:bg-accent/10 focus:text-accent cursor-pointer"
          >
            {lang.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LangChange; 