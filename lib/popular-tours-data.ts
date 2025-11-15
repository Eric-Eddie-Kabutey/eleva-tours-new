export type PopularTour = {
    id: string;
    imageUrl: string;
    location: string;
    rating: number; // e.g., 5 for 5 stars
    title: string;
    durationDays: number;
    capacity: number;
    price: number;
    href: string;
};

export const popularToursData: PopularTour[] = [
    {
        id: "br-1",
        imageUrl: "/assets/images/tours/tour-img-1.jpg",
        location: "Madrid, Spain",
        rating: 5,
        title: "Brooklyn Beach Resort Tour",
        durationDays: 10,
        capacity: 50,
        price: 250,
        href: "/tours/brooklyn-beach",
    },
    {
        id: "ct-1",
        imageUrl: "/assets/images/tours/tour-img-2.jpg",
        location: "Chumphon, Thailand",
        rating: 5,
        title: "Pak Chumphon Town Tour",
        durationDays: 12,
        capacity: 70,
        price: 450,
        href: "/tours/chumphon-town",
    },
    {
        id: "bl-1",
        imageUrl: "/assets/images/tours/tour-img-3.jpg",
        location: "Lasvegas, USA",
        rating: 5,
        title: "Bali One Life Adventure",
        durationDays: 7,
        capacity: 52,
        price: 350,
        href: "/tours/bali-adventure",
    },
    {
        id: "ptn-1",
        imageUrl: "/assets/images/tours/tour-img-4.jpg",
        location: "Barcelona, Spain",
        rating: 5,
        title: "Places To Travel November",
        durationDays: 13,
        capacity: 100,
        price: 550,
        href: "/tours/places-november",
    },    
];