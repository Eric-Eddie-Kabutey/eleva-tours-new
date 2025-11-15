export type PopularDestination = {
    id: number;
    location: string;
    description: string;
    tripCount: number;
    imageUrl: string;
    href: string;
};

export const popularDestinationsData: PopularDestination[] = [
    {
        id: 1,
        location: "Ghana",
        description: "Globally drive pandemic e-business via functionalized e-business. Rapidiously simplify covalent leadership whereas distributed results.",
        tripCount: 8,
        imageUrl: "/assets/images/destinations/dest-1.jpg", 
        href: "/destinations/ghana",
    },
    {
        id: 2,
        location: "South Africa",
        description: "Simplify Globally pandemic e-business via covalent leadership. Rapidiously functionalized e-business whereas distributed results.",
        tripCount: 8,
        imageUrl: "/assets/images/destinations/dest-2.jpg",
        href: "/destinations/south-africa",
    },   
];