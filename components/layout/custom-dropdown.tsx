"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { PAGES_WITH_TRANSPARENT_HEADER } from "./header";

type CustomDropdownProps = {
  title: string;
  links: { title: string; href: string }[];  
  isNavSticky: boolean
};

export function CustomDropdown({ title,links, isNavSticky }: CustomDropdownProps) {
  const [ isOpen, setIsOpen ] = useState(false);
  const pathname = usePathname()
  
   // This boolean is true if the current page should have a transparent header.
    const hasTransparentHeader  = PAGES_WITH_TRANSPARENT_HEADER.includes(pathname);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.15 } },
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className={cn( hasTransparentHeader ? "text-white hover:text-yellow-opaque " : "text-green-opaque hover:text-yellow-opaque ",isOpen ? "text-yellow-opaque " : "", isNavSticky ? "text-green-opaque" : ""," flex items-center gap-1 font-medium")}>
        {title}
        <ChevronDown size={16} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-full left-[0%] -translate-x-[0%] mt-2 w-44 origin-top rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div className="py-1">
              {links.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="block px-4 py-2 text-sm text-green-opaque hover:bg-yellow-opaque hover:text-green-opaque"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}