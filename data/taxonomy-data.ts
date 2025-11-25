// This file will be the single source of truth for all categories and tags.

export type Category = {
    name: string; // The human-readable name (e.g., "Hill Tracking")
    slug: string;  // The URL-friendly version (e.g., "hill-tracking")
    count: number; // The number of tours or posts in this category
};

export const tourCategories: Category[] = [
    { name: "Hill Tracking", slug: "hill-tracking", count: 8 },
    { name: "Adventure", slug: "adventure", count: 5 },
    { name: "Village Beauty", slug: "village-beauty", count: 6 },
    { name: "Night View", slug: "night-view", count: 8 },
    { name: "Religious Place", slug: "religious-place", count: 7 },
    { name: "Lake View", slug: "lake-view", count: 3 },
    { name: "Sea Area", slug: "sea-area", count: 5 },
    { name: "Resort", slug: "resort", count: 4 },
];

// We can reuse these tags for both tours and blog posts
export const popularTags = [
    "Adventure", "Beach", "Destinations", "Parks",
    "Lifestyle", "Tours", "Hotels", "Tourist", "Education", "Online"
];