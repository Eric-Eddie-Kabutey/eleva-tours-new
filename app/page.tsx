import { Hero } from "@/components/home/hero/hero";
import { About } from "@/components/home/about/about";
import { Stats } from "@/components/home/stats";
import { PopularDestinations } from "@/components/home/popular-destination";
import { WhyChooseUs } from "@/components/home/why-chose-us";
import { PopularTours } from "@/components/home/popular-tours";
import { Deals } from "@/components/deals";
import Image from "next/image";
import { ExperienceCta } from "@/components/home/experience-cta";
import { TestimonialsSlider } from "@/components/testimonials/testimonials-slider";
import FooterCta from "@/components/layout/footer-cta";

export default function Home() {
    return (<>
        {/* Hero section */}
        <Hero />

        {/* About section */}
        <About />

        {/* Statistics section */}
        <Stats />

        {/* Popular Destination section */}
        <PopularDestinations />

        {/* Why Choose Us section */}
        <WhyChooseUs />

        {/* Popular Tours section */}
        <PopularTours />

        {/* Deals section */}
        <Deals />

        {/* New Wrapper Section */}
      <section className="bg-[#F5F5F5] relative pb-20 md:pb-28 overflow-hidden">
        {/* Faint background world map */}
        <div className="absolute inset-0 z-0 opacity-5">
          <Image src="/assets/images/home/world-map-bg-img.png" alt="Globe Map" layout="fill" objectFit="cover" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <ExperienceCta />
          <TestimonialsSlider />
        </div>
        </section>
        
        {/* CTA section */}
        <FooterCta />
    </>)
}