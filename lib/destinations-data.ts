export type PopularDestination = {
	id: number
	location: string
	description: string
	tripCount: number
	imageUrl: string
	href: string
}

export const popularDestinationsData: PopularDestination[] = [
	{
		id: 1,
		location: 'Ghana',
		description:
			'Globally drive pandemic e-business via functionalized e-business. Rapidiously simplify covalent leadership whereas distributed results.',
		tripCount: 8,
		imageUrl: '/assets/images/destinations/dest-1.jpg',
		href: '/destinations/ghana',
	},
	{
		id: 2,
		location: 'South Africa',
		description:
			'Simplify Globally pandemic e-business via covalent leadership. Rapidiously functionalized e-business whereas distributed results.',
		tripCount: 8,
		imageUrl: '/assets/images/destinations/dest-2.jpg',
		href: '/destinations/south-africa',
	},
]

export type Destination = {
	id: string
	name: string
	imageUrl: string
	tripCount: number
	href: string
	// Add fields for sorting
	popularity: number // e.g., number of bookings
	rating: number // e.g., average rating from 1 to 5
	price: number // A representative price for sorting
	dateAdded: Date // To sort by "latest"
}

// Create a larger dataset to demonstrate sorting and pagination
export const allDestinationsData: Destination[] = [
	// Page 1
	{
		id: 'ghana',
		name: 'Ghana',
		imageUrl: '/assets/images/destinations/dest-1.jpg',
		tripCount: 6,
		href: '/destinations/ghana',
		popularity: 95,
		rating: 4.8,
		price: 2200,
		dateAdded: new Date('2023-11-10'),
	},
	{
		id: 'barcelona',
		name: 'Barcelona',
        imageUrl: '/assets/images/destinations/dest-2.jpg',
		tripCount: 8,
		href: '/destinations/barcelona',
		popularity: 98,
		rating: 4.9,
		price: 1800,
		dateAdded: new Date('2023-10-25'),
	},
	{
		id: 'amsterdam',
		name: 'Amsterdam',
        imageUrl: '/assets/images/destinations/dest-3.jpg',
		tripCount: 6,
		href: '/destinations/amsterdam',
		popularity: 85,
		rating: 4.6,
		price: 1600,
		dateAdded: new Date('2023-09-01'),
	},
	{
		id: 'budapest',
		name: 'Budapest City',
        imageUrl: '/assets/images/destinations/dest-4.jpg',
		tripCount: 5,
		href: '/destinations/budapest',
		popularity: 88,
		rating: 4.7,
		price: 1300,
		dateAdded: new Date('2024-01-05'),
	},
	{
		id: 'maldives',
		name: 'Maldives',
        imageUrl: '/assets/images/destinations/dest-5.jpg',
		tripCount: 7,
		href: '/destinations/maldives',
		popularity: 92,
		rating: 4.9,
		price: 3500,
		dateAdded: new Date('2023-12-15'),
	},
	{
		id: 'indonesia',
		name: 'Indonesia',
        imageUrl: '/assets/images/destinations/dest-6.jpg',
		tripCount: 6,
		href: '/destinations/indonesia',
		popularity: 89,
		rating: 4.7,
		price: 2500,
		dateAdded: new Date('2023-11-20'),
	},
	{
		id: 'bangkok',
		name: 'Bangkok',
        imageUrl: '/assets/images/destinations/dest-7.jpg',
		tripCount: 5,
		href: '/destinations/bangkok',
		popularity: 93,
		rating: 4.8,
		price: 1500,
		dateAdded: new Date('2023-08-10'),
	},
	{
		id: 'nepal',
		name: 'Nepal',
        imageUrl: '/assets/images/destinations/dest-8.jpg',
		tripCount: 7,
		href: '/destinations/nepal',
		popularity: 75,
		rating: 4.5,
		price: 1900,
		dateAdded: new Date('2023-07-22'),
	},
	// Page 2
	{
		id: 'paris',
		name: 'Paris',
        imageUrl: '/assets/images/destinations/dest-2.jpg',
		tripCount: 9,
		href: '/destinations/paris',
		popularity: 100,
		rating: 4.9,
		price: 2100,
		dateAdded: new Date('2024-02-01'),
	},
	{
		id: 'rome',
		name: 'Rome',
        imageUrl: '/assets/images/destinations/dest-3.jpg',
		tripCount: 8,
		href: '/destinations/rome',
		popularity: 96,
		rating: 4.8,
		price: 1950,
		dateAdded: new Date('2023-11-05'),
	},
	{
		id: 'tokyo',
		name: 'Tokyo',
        imageUrl: '/assets/images/destinations/dest-4.jpg',
		tripCount: 6,
		href: '/destinations/tokyo',
		popularity: 94,
		rating: 4.9,
		price: 2800,
		dateAdded: new Date('2023-10-15'),
	},	
]
