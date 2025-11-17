export type Team = {
    id: string;
    name: string;
    title: string;
    imageUrl: string;
    profileUrl: string; // Link for the "+" button
};

export const teamsData: Team[] = [
    {
        id: "guide-1",
        name: "Mishel Marsh",
        title: "Switzerland Guide",
        imageUrl: "/assets/images/team/team-1.jpg",
        profileUrl: "/guides/mishel-marsh",
    },
    {
        id: "guide-2",
        name: "Michel Richard",
        title: "Maldives Guide",
        imageUrl: "/assets/images/team/team-2.jpg",
        profileUrl: "/guides/michel-richard",
    },
    {
        id: "guide-3",
        name: "Famhida Ruko",
        title: "Iceland Guide",
        imageUrl: "/assets/images/team/team-3.jpg",
        profileUrl: "/guides/famhida-ruko",
    },
    {
        id: "guide-4",
        name: "Alex Anfantino",
        title: "Indonesia Guide",
        imageUrl: "/assets/images/team/team-4.jpg",
        profileUrl: "/guides/alex-anfantino",
    },    
    {
        id: "guide-5",
        name: "Jane Doe",
        title: "Japan Guide",
        imageUrl: "/assets/images/team/team-5.jpg",
        profileUrl: "/guides/jane-doe",
    },    
];