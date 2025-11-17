export type Deal = {
    id: string;
    imageUrl: string;
    discount: number;
    title: string;
    subTitle: string;
    price: number;
    href: string;
};

export const dealsData: Deal[] = [
    {
        id: "deal-1",
        imageUrl: "/assets/images/home/deals/deals-img-1.jpg", 
        discount: 30,
        title: "Seychelles",
        subTitle: "Enjoy Seychelles",
        price: 150,
        href: "/deals/seychelles",
    },
    {
        id: "deal-2",
        imageUrl: "/assets/images/home/deals/deals-img-2.jpg",
        discount: 25,
        title: "Adventure Mountain",
        subTitle: "Mountain Iceland",
        price: 250,
        href: "/deals/adventure-mountain",
    },
    {
        id: "deal-3",
        imageUrl: "/assets/images/home/deals/deals-img-3.jpg",
        discount: 30,
        title: "Adventures",
        subTitle: "Explore Adventures",
        price: 350,
        href: "/deals/adventures",
    },
    {
        id: "deal-4",
        imageUrl: "/assets/images/home/deals/deals-img-4.jpg",
        discount: 45,
        title: "Night City",
        subTitle: "City Night Beauty",
        price: 200,
        href: "/deals/night-city",
    },    
    {
        id: "deal-5",
        imageUrl: "/assets/images/home/deals/deals-img-5.jpg",
        discount: 20,
        title: "Coastal Escape",
        subTitle: "Relax by the sea",
        price: 300,
        href: "/deals/coastal-escape",
    },
];