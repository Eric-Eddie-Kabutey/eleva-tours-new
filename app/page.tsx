import { Hero } from "@/components/home/hero/hero";
import { About } from "@/components/home/about/about";
import { Stats } from "@/components/home/stats";
import { PopularDestinations } from "@/components/home/popular-destination";
import { WhyChooseUs } from "@/components/home/why-chose-us";
import { PopularTours } from "@/components/home/popular-tours";

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
    </>)
}