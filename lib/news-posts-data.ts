export type Quote = {
    text: string;
    author: string;
};

export type PostImage = {
    src: string;
    alt: string;
};

export type NewsPost = {
    id: string;
    slug: string;
    title: string;
    heroImage: string;
    author: string;
    date: Date;
    category: string; // Matches a 'name' from tourCategories
    tags: string[];     // Matches tags from popularTags

    // Content blocks for the detail page
    content: (
        | { type: 'paragraph'; text: string }
        | { type: 'quote'; data: Quote }
        | { type: 'heading'; text: string }
        | { type: 'images'; images: PostImage[] }
    )[];
};

export const newsPostsData: NewsPost[] = [
    {
        id: "post-1",
        slug: "tips-for-making-most-of-summer",
        title: "Get Tips For Making The Most Of Your Summer",
        heroImage: "/assets/images/tours/news/blog-1-img.jpg",
        author: "David Smith",
        date: new Date("2023-06-21"),
        category: "Adventure", // <-- This now matches a tour category!
        tags: [ "Lifestyle", "Tours", "Beach" ],
        content: [
            { type: 'paragraph', text: "Rapidlously repurpose leading edge growth strategies with just in time web readiness service. Objectively communicate timely meta services for synergistic initiatives functionalities." },
            { type: 'paragraph', text: "Uniquely pursue emerging experiences before emerging content. Efficiently underwhelm customer directed total linkage after B2C synergy. Dynamically simplify superior human capital whereas efficient infrastructures. Authoritatively generate e-business web-readiness after wireless outsourcing. Seamlessly evisculate visionary scenarios for resource maximizing mindshare." },
            { type: 'quote', data: { text: "Efficiently pontificate strategic synergy without distributed growth strategies. Collaboratively restore.", author: "Md Sumon Mia" } },
            { type: 'paragraph', text: "Appropriately mesh standards compliant communities vis-a-vis client-centric channels. Seamlessly reinvent open-source data via bricks-and-clicks bandwidth. Globally leverage other’s inexpensive technologies vis-a-vis user friendly systems." },
            { type: 'heading', text: "EazyPNR is the only theme you will ever need" },
            { type: 'paragraph', text: "Phosfluorescently grow cross-unit total linkage and timely partnerships. Efficiently fabricate standardized manufactured products for an expanded array of users." },
            {
                type: 'images', images: [
                    { src: '/assets/images/tours/news/blog-inner-1-img.jpg', alt: 'Woman with arms outstretched in a forest' },
                    { src: '/assets/images/tours/news/blog-inner-2-img.jpg', alt: 'Aerial view of a beach with palm trees' },
                ]
            },
            { type: 'paragraph', text: "Globally cultivate ubiquitous growth strategies before team building users. Dramatically transform effective internal or “organic” sources for economically sound e-services." },
        ]
    },    
    {
        id: "post-2",
        slug: "guide-to-hill-tracking",
        title: "A Beginner's Guide to Hill Tracking",
        heroImage: "/assets/images/tours/news/blog-2-img.jpg",
        author: "Alex Anfantino",
        date: new Date("2023-05-15"),
        category: "Hill Tracking", // <-- Another matching category!
        tags: [ "Adventure", "Destinations", "Parks" ],
        content: [
            { type: 'paragraph', text: "Rapidlously repurpose leading edge growth strategies with just in time web readiness service. Objectively communicate timely meta services for synergistic initiatives functionalities." },
            { type: 'paragraph', text: "Uniquely pursue emerging experiences before emerging content. Efficiently underwhelm customer directed total linkage after B2C synergy. Dynamically simplify superior human capital whereas efficient infrastructures. Authoritatively generate e-business web-readiness after wireless outsourcing. Seamlessly evisculate visionary scenarios for resource maximizing mindshare." },
            { type: 'quote', data: { text: "Efficiently pontificate strategic synergy without distributed growth strategies. Collaboratively restore.", author: "Md Sumon Mia" } },
            { type: 'paragraph', text: "Appropriately mesh standards compliant communities vis-a-vis client-centric channels. Seamlessly reinvent open-source data via bricks-and-clicks bandwidth. Globally leverage other’s inexpensive technologies vis-a-vis user friendly systems." },
            { type: 'heading', text: "EazyPNR is the only theme you will ever need" },
            { type: 'paragraph', text: "Phosfluorescently grow cross-unit total linkage and timely partnerships. Efficiently fabricate standardized manufactured products for an expanded array of users." },
            {
                type: 'images', images: [
                    { src: '/assets/images/tours/news/blog-inner-1-img.jpg', alt: 'Woman with arms outstretched in a forest' },
                    { src: '/assets/images/tours/news/blog-inner-2-img.jpg', alt: 'Aerial view of a beach with palm trees' },
                ]
            },
            { type: 'paragraph', text: "Globally cultivate ubiquitous growth strategies before team building users. Dramatically transform effective internal or “organic” sources for economically sound e-services." },
        ]
    },
    {
        id: "post-3",
        slug: "five-ways-to-get-best-photos-on-picnic-spot",
        title: "Five Ways to Get Best Photos On Picnic Spot",
        heroImage: "/assets/images/tours/news/blog-1-img.jpg",
        author: "David Smith",
        date: new Date("2023-06-21"),
        category: "Adventure", // <-- This now matches a tour category!
        tags: [ "Lifestyle", "Tours", "Beach" ],
        content: [
            { type: 'paragraph', text: "Rapidiously repurpose leading edge growth strategies with just in time web readiness service Objectively communicate timely meta services for synergistic initiatives functionalities." },
            { type: 'paragraph', text: "Uniquely pursue emerging experiences before emerging content. Efficiently underwhelm customer directed total linkage after B2C synergy. Dynamically simplify superior human capital whereas efficient infrastructures. Authoritatively generate e-business web-readiness after wireless outsourcing. Seamlessly evisculate visionary scenarios for resource maximizing mindshare." },
            { type: 'paragraph', text: "Assertively recaptiualize interdependent alignments via backend leadership skills. Monotonectally formulate focused quality vectors whereas proactive infomediaries. Energistically utilize ethical initiatives without impactful applications. Authoritatively coordinate seamless e-services and user friendly information. Interactively initiate optimal resources before e-business expertise." },
            { type: 'quote', data: { text: "Efficiently pontificate strategic synergy without distributed growth strategies. Collaboratively restore.", author: "Md Sumon Mia" } },
            { type: 'paragraph', text: "Appropriately mesh standards compliant communities vis-a-vis client-centric channels. Seamlessly reinvent open-source data via bricks-and-clicks bandwidth. Globally leverage other’s inexpensive technologies vis-a-vis user friendly systems." },
            { type: 'heading', text: "EazyPNR is the only theme you will ever need" },
            { type: 'paragraph', text: "Phosfluorescently grow cross-unit total linkage and timely partnerships. Efficiently fabricate standardized manufactured products for an expanded array of users." },
            {
                type: 'images', images: [
                    { src: '/assets/images/tours/news/blog-inner-1-img.jpg', alt: 'Woman with arms outstretched in a forest' },
                    { src: '/assets/images/tours/news/blog-inner-2-img.jpg', alt: 'Aerial view of a beach with palm trees' },
                ]
            },
            { type: 'paragraph', text: "Globally cultivate ubiquitous growth strategies before team building users. Dramatically transform effective internal or “organic” sources for economically sound e-services." },
        ]
    },
    {
        id: "post-4",
        slug: "read-to-to-get-your-dream-photos-on-picnic-spot",
        title: "Read to Get Your Dream Photos On Picnic Spot",
        heroImage: "/assets/images/tours/news/blog-1-img.jpg",
        author: "David Smith",
        date: new Date("2023-06-21"),
        category: "Adventure", // <-- This now matches a tour category!
        tags: [ "Lifestyle", "Tours", "Beach" ],
        content: [
            { type: 'paragraph', text: "Rapidiously repurpose leading edge growth strategies with just in time web readiness service Objectively communicate timely meta services for synergistic initiatives functionalities." },
            { type: 'paragraph', text: "Uniquely pursue emerging experiences before emerging content. Efficiently underwhelm customer directed total linkage after B2C synergy. Dynamically simplify superior human capital whereas efficient infrastructures. Authoritatively generate e-business web-readiness after wireless outsourcing. Seamlessly evisculate visionary scenarios for resource maximizing mindshare." },
            { type: 'paragraph', text: "Assertively recaptiualize interdependent alignments via backend leadership skills. Monotonectally formulate focused quality vectors whereas proactive infomediaries. Energistically utilize ethical initiatives without impactful applications. Authoritatively coordinate seamless e-services and user friendly information. Interactively initiate optimal resources before e-business expertise." },
            { type: 'quote', data: { text: "Efficiently pontificate strategic synergy without distributed growth strategies. Collaboratively restore.", author: "Md Sumon Mia" } },
            { type: 'paragraph', text: "Appropriately mesh standards compliant communities vis-a-vis client-centric channels. Seamlessly reinvent open-source data via bricks-and-clicks bandwidth. Globally leverage other’s inexpensive technologies vis-a-vis user friendly systems." },
            { type: 'heading', text: "EazyPNR is the only theme you will ever need" },
            { type: 'paragraph', text: "Phosfluorescently grow cross-unit total linkage and timely partnerships. Efficiently fabricate standardized manufactured products for an expanded array of users." },
            {
                type: 'images', images: [
                    { src: '/assets/images/tours/news/blog-inner-1-img.jpg', alt: 'Woman with arms outstretched in a forest' },
                    { src: '/assets/images/tours/news/blog-inner-2-img.jpg', alt: 'Aerial view of a beach with palm trees' },
                ]
            },
            { type: 'paragraph', text: "Globally cultivate ubiquitous growth strategies before team building users. Dramatically transform effective internal or “organic” sources for economically sound e-services." },
        ]
    },
];