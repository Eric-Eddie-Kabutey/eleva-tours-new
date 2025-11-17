"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
     ArrowUp, 
    Facebook, Twitter, Linkedin, Instagram, MessageCircle 
} from "lucide-react";

import {  footerSocialLinks } from "@/lib/footer-data";
import Typography from "../shared/typography";
import FooterCta from "./footer-cta";


// A map to get social icons by name
const socialIconMap = { Facebook, Twitter, Linkedin, Instagram, WhatsApp: MessageCircle };

export function Footer() {  
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

 

    return (
        <>
            {/* CTA section */}
            <FooterCta />
            {/* Footer section */}
            <footer className="pt-24">      

            {/* ====== MAIN FOOTER SECTION ====== */}
            <div className="bg-green-opaque text-white pt-36 pb-12">
                <div className="container max-w-6xl 2xl:max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-2 md:place-items-center">
                
                {/* Column 1: About */}
                <div className="space-y-2">
                    <Link href="/">
                        <Image src="/assets/logo/elavatour-logo-white.png" alt="Eleva Tour Logo" width={150} height={50} />
                    </Link>
                    <p className="text-gray-400 text-sm">Curated cultural journeys in Ghana & South Africa. More destinations coming soon.</p>
                    <div className="flex gap-3 pt-4">
                        {footerSocialLinks.map(link => {
                            const Icon = socialIconMap[link.name as keyof typeof socialIconMap] || Link;
                            return (
                                <a key={link.name} href={link.href} className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-brand-green transition-colors">
                                    <Icon size={18} />
                                </a>
                            )
                        })}
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div className='col-span-3 w-full py-4 flex justify-center items-center border-y border-gray-500 md:border-none'>
                    <Typography
                        typo="header-1-semibold"
                        className='text-white 2xl:!text-[9rem] xl:!text-[8rem] md:!text-[5rem]  sm:!text-[6rem] xs:!text-[4.5rem] !text-[3.5rem] font-bold uppercase !leading-normal'
                    >
                        Eleva tours
                    </Typography>
                </div>
                        
                </div>
            </div>

            {/* ====== SUB-FOOTER SECTION ====== */}
            <div className="bg-[#11310c] text-gray-400">
                <div className="container max-w-6xl 2xl:max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center text-sm">
                    <p>Copyright &copy; {new Date().getFullYear()} <Link href="/" className="text-brand-green font-semibold">Eleva Tours</Link>. All Rights Reserved.</p>
                    <div className="flex gap-4 mt-4 sm:mt-0">
                        <Link href="/terms" className="hover:text-white">Terms of Use</Link>
                        <span>|</span>
                        <Link href="/privacy" className="hover:text-white">Privacy Environmental Policy</Link>
                    </div>
                </div>
            </div>
            
            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 z-50 h-12 w-12 rounded-full bg-green-opaque border border-yellow-opaque text-white shadow-lg flex items-center justify-center hover:bg-brand-green/80 transition-all"
                aria-label="Scroll to top"
                >
                <ArrowUp className="h-6 w-6" />
                </button>
            )}
            </footer>
      </>
  );
}