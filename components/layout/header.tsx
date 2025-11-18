"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone, Mail, MapPin, User, Search, Menu, Facebook, Instagram,
} from "lucide-react";

import { navLinks, socialLinks } from "@/lib/nav-data";
import { CustomDropdown } from "./custom-dropdown";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
// A map to get icons by name for social links
const iconMap = { Facebook, Instagram, };

// Routes with a hero section with a bg-image - header with a transparent bg
export const PAGES_WITH_TRANSPARENT_HEADER = [
  '/',   
  '/about-us',
  '/destination/ghana',
  '/destination/south-africa',
  '/tours/family',
  '/tours/group',
  '/tours/solo'
  // add other routers (full path) here
];

export function Header() {
  const [showTopBanner, setShowTopBanner] = useState(true);
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false);
  const pathname = usePathname()
  
  // This boolean is true if the current page should have a transparent header.
  const hasTransparentHeader  = PAGES_WITH_TRANSPARENT_HEADER.includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      // Hide top banner after scrolling a little
      setShowTopBanner(window.scrollY < 50);
      // Make main nav sticky after scrolling past a certain point (e.g., height of hero)
      setIsNavSticky(window.scrollY > 400); // Adjust this value based on your hero height
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bannerVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: "-100%", opacity: 0 },
  };

  const navVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: "-100%", opacity: 0 },
  };

  return (
    <>
      {/* --- TOP BANNER --- */}
      <AnimatePresence>
        {showTopBanner && (
          <motion.div
            variants={bannerVariants}
            initial="visible"
            animate="visible"
            exit="hidden"
            className="fixed top-0 left-0 right-0 z-40 bg-green-opaque text-white"
          >
            {/* The diagonal green part is a pseudo-element */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 h-full w-1/3 bg-yellow-opaque transform -skew-x-12 origin-top-right" />
            </div>
            <div className="container max-w-6xl 2xl:max-w-7xl mx-auto px-4 h-12 flex items-center justify-between relative">
                <div className="flex items-center gap-6 text-sm">
                    <a href="tel:256214203215" className="flex items-center gap-2"><Phone size={16} /> 256 214 203 215</a>
                    <a href="mailto:info@travon.com" className="hidden md:flex items-center gap-2"><Mail size={16} /> info@elevatours.com</a>
                    <p className="hidden lg:flex items-center gap-2"><MapPin size={16} /> 9550 Bolsa Ave #126, Ghana</p>
                </div>
                <div className="flex items-center gap-6 text-sm">
                    <a href="/login" className="flex items-center gap-2"><User size={16} /> Login / Register</a>
                    <div className="hidden md:flex items-center gap-3">
                        <span>Follow Us:</span>
                        {socialLinks.map(link => {
                            const Icon = iconMap[link.icon as keyof typeof iconMap];
                            return <a key={link.name} href={link.href} aria-label={link.name}><Icon size={16} /></a>
                        })}
                    </div>
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MAIN NAVIGATION --- */}
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate={isNavSticky ? "visible" : "hidden"}
        className="fixed top-0 left-0 right-0 z-30 bg-white shadow-md"
      >
        <div className="container max-w-6xl 2xl:max-w-7xl mx-auto px-4 h-24 flex justify-between items-center">
          {/* Logo is now inside the sticky nav, but for the main page we have a different layout */}
          {/* Main Logo for Sticky and Other pages */}
           <div className="container max-w-6xl 2xl:max-w-7xl mx-auto px-4 h-24 flex justify-between items-center">
            {/* The diagonal background for the logo */}
            <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-white via-brand-green-light/50 to-transparent transform -skew-x-12 -translate-x-1/4" />
            <Link href="/" className="relative z-10">
                <Image src="/assets/logo/elavatour-logo-colored.png" alt="Travon Logo" width={150} height={50} />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
                {navLinks.map(nav => nav.links ?
                    <CustomDropdown key={nav.title} title={nav.title} links={nav.links} isNavSticky={isNavSticky} /> :
                    <Link key={nav.title} href={nav.href || '#'} className={cn(hasTransparentHeader ? "text-green-opaque hover:text-yellow-opaque " : "text-gray-700", "font-medium")}>{nav.title}</Link>
                )}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="rounded-full h-12 w-12 hover:text-yellow-opaque border hover:border-yellow-opaque"><Search  /></Button>
                {/* Mobile Menu Trigger */}
                <div className="lg:hidden">
                    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                        <SheetTrigger asChild>
                             <Button variant="outline" size="icon" className="rounded-full h-12 w-12"><Menu /></Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-full p-0">
                            {/* Mobile Menu Content */}
                             <div className="p-6">
                                <Accordion type="single" collapsible className="w-full">
                                {navLinks.map(nav => nav.links ? (
                                    <AccordionItem value={nav.title} key={nav.title}>
                                        <AccordionTrigger>{nav.title}</AccordionTrigger>
                                        <AccordionContent>
                                            <ul className="pl-4">
                                            {nav.links.map(link => (
                                                <li key={link.title}><Link href={link.href} className="block py-2">{link.title}</Link></li>
                                            ))}
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                ) : (
                                    <Link key={nav.title} href={nav.href || '#'} className="block py-4 border-b">{nav.title}</Link>
                                ))}
                                </Accordion>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
        </div>
      </motion.nav>

      {/* --- HERO NAVIGATION (visible at top of page) --- */}
      <div className="absolute top-12 left-0 right-0 z-20">
        <div className="container max-w-6xl 2xl:max-w-7xl mx-auto px-4 h-24 flex justify-between items-center">
            {/* The diagonal background for the logo */}
            <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-white via-brand-green-light/50 to-transparent transform -skew-x-12 -translate-x-1/4" />
            <Link href="/" className="relative z-10">
                <Image src="/assets/logo/elavatour-logo-colored.png" alt="Travon Logo" width={150} height={50} />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
                {navLinks.map(nav => nav.links ?
                    <CustomDropdown key={nav.title} title={nav.title} links={nav.links} /> :
                    <Link key={nav.title} href={nav.href || '#'} className={cn(hasTransparentHeader ? "text-white hover:text-yellow-opaque " : "text-gray-700", "font-medium")}>{nav.title}</Link>
                )}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="rounded-full h-12 w-12 hover:text-yellow-opaque border hover:border-yellow-opaque"><Search  /></Button>
                {/* Mobile Menu Trigger */}
                <div className="lg:hidden">
                    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                        <SheetTrigger asChild>
                             <Button variant="outline" size="icon" className="rounded-full h-12 w-12"><Menu /></Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-full p-0">
                            {/* Mobile Menu Content */}
                             <div className="p-6">
                                <Accordion type="single" collapsible className="w-full">
                                {navLinks.map(nav => nav.links ? (
                                    <AccordionItem value={nav.title} key={nav.title}>
                                        <AccordionTrigger>{nav.title}</AccordionTrigger>
                                        <AccordionContent>
                                            <ul className="pl-4">
                                            {nav.links.map(link => (
                                                <li key={link.title}><Link href={link.href} className="block py-2">{link.title}</Link></li>
                                            ))}
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                ) : (
                                    <Link key={nav.title} href={nav.href || '#'} className="block py-4 border-b">{nav.title}</Link>
                                ))}
                                </Accordion>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}