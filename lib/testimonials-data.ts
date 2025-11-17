export type Testimonial = {
    id: string;
    rating: number;
    quote: string;
    avatarUrl: string;
    name: string;
    title: string;
};

export const testimonialsData: Testimonial[] = [
    {
        id: "t1",
        rating: 5,
        quote: "Objectively deploy open-source web-readiness impactful bandwidth. Compellingly coordinate business deliverables rather equity invested technologies. Phosfluorescently reinvent.",
        avatarUrl: "/assets/images/testimonials/testi-1-img.jpg",
        name: "Mary Cruzleen",
        title: "CEO of Mathon",
    },
    {
        id: "t2",
        rating: 5,
        quote: "Objectively deploy open-source web-readiness impactful bandwidth. Compellingly coordinate business deliverables rather equity invested technologies. Phosfluorescently reinvent.",
        avatarUrl: "/assets/images/testimonials/testi-2-img.jpg",
        name: "David Milton",
        title: "CEO of Gazal",
    },
    {
        id: "t3",
        rating: 5,
        quote: "Objectively deploy open-source web-readiness impactful bandwidth. Compellingly coordinate business deliverables rather equity invested technologies. Phosfluorescently reinvent.",
        avatarUrl: "/assets/images/testimonials/testi-3-img.jpg",
        name: "Abraham Khalil",
        title: "CEO of Adivaha",
    },
    {
        id: "t4",
        rating: 5,
        quote: "Objectively deploy open-source web-readiness impactful bandwidth. Compellingly coordinate business deliverables rather equity invested technologies. Phosfluorescently reinvent.",
        avatarUrl: "/assets/images/testimonials/testi-4-img.jpg",
        name: "Abraham Khalil",
        title: "CEO of Adivaha",
    },    
];