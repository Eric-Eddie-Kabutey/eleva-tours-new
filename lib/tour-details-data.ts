export type TourPlanDay = {
    day: number;
    title: string;
    details: string;
};

export type FullTourDetails = {
    id: string;
    slug: string;
    title: string;
    price: number;
    duration: string;
    location: string;
    groupSize: number;
    mainImageUrl: string;
    description: string[]; // Array of paragraphs
    detailsTable: {
        destination: string;
        departure: string;
        departureTime: string;
        returnTime: string;
    };
    included: string[];
    excluded: string[];
    tourPlan: TourPlanDay[];
    gallery: string[]; // Array of image URLs
    mapEmbedUrl: string;
};

// Example data for one tour. You would fetch this from a CMS or API in a real app.
export const tourDetailsData: FullTourDetails[] = [
    {
        id: "bcl-1",
        slug: "brooklyn-christmas-lights",
        title: "Brooklyn Christmas Lights Tour",
        price: 250,
        duration: "10 Days, 11 Nights",
        location: "Madrid, Spain",
        groupSize: 50,
        mainImageUrl: "/tours/brooklyn-beach.jpg",
        description: [
            "Objectively leverage existing tactical core competencies for innovative innovation. Continually matrix unique resources for impactful solutions. Uniquely coordinate competitive e-tailers after resource maximizing benefits. Uniquely actualize principle-centered best practices rather than front-end testing procedures. Efficiently repurpose high-quality outsourcing vis-a-vis leading-edge schemas.",
            "Collaboratively predominate team building functionalities vis-a-vis holistic quality vectors. Appropriately plagiarize interdependent customer service without out-of-the-box internal or “organic” sources. Synergistically utilize user-centric opportunities after world-class ideas. Synergistically facilitate.",
        ],
        detailsTable: {
            destination: "NYC International Airport",
            departure: "Yes Required",
            departureTime: "01 January, 2023 10:00AM",
            returnTime: "08 January, 2023 10:00AM",
        },
        included: [ "Specialized Bilingual Guide", "Private Transport", "Entrance Fees", "Box Lunch,Water,Dinner and Snacks" ],
        excluded: [ "Additional Services", "Insurance", "Drink", "Tickets" ],
        tourPlan: [
            { day: 1, title: "Departure", details: "" },
            { day: 2, title: "Adventure Begins", details: "Authoritatively engage transparent users for standard compliant vortal. Continually seize technically sound applications rather than an expanded array of methodologies. Competently envisioneer fully researched “outside the box” thinking via team building technologies." },
            { day: 3, title: "Airplain Tour", details: "Details for Day 3..." },
            // ... Add all 10 days
        ],
        gallery: [
            "/gallery/tour-detail-1.jpg",
            "/gallery/tour-detail-2.jpg",
            "/gallery/tour-detail-3.jpg",
            "/gallery/tour-detail-4.jpg",
            "/gallery/tour-detail-5.jpg",
        ],
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d...etc",
    },
    // Add other tour details here...
];