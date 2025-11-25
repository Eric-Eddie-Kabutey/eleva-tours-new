// For the day-by-day plan in the "Tour Plan" tab
export type TourPlanDay = {
	day: number
	title: string
	details: string
}

// Represents a single, bookable tour package
export type Tour = {
	id: string
	slug: string
	title: string

	type: 'group' | 'family' | 'solo'; // tour types
	category: string; // This should now match a 'name' from tourCategories
	tags: string[]; 

	// For the tour card grids
	price: number
	location: string
	duration: string // e.g., "10 Days, 11 Nights"
	groupSize: number
	rating: number
	popularity: number	
	dateAdded: Date
	mainImageUrl: string


	// For the tour detail page tabs
	description: string[]
	detailsTable: {
		destination: string
		departure: string
		departureTime: string
		returnTime: string
	}
	included: string[]
	excluded: string[]
	tourPlan: TourPlanDay[]
	gallery: string[]
	mapEmbedUrl: string
}

// Represents a category of tours within a destination (e.g., "Hiking")
export type ActivityCategory = {
	id: string
	slug: string
	name: string
	description: string[]
	tours: Tour[]
}

// Represents a top-level destination (e.g., "Ghana")
export type Destination = {
	id: string
	slug: string
	name: string
	description: string[]
	activityCategories: ActivityCategory[]
}

// Destinations data 
export const destinationsData: Destination[] = [
	{
		id: 'dest-ghana',
		slug: 'ghana',
		name: 'Ghana',
		description: [
			"Dynamically leverage other's excellent collaboration and idea-sharing via multimedia based applications. Appropriately incentivize go forward leadership skills rather than business processes.",
			'Collaboratively architect one-to-one niche markets vis-à-vis alternative niche market. Completely engineer alternative mindshare vis-à-vis strategic total linkage.',
		],
		activityCategories: [
			{
				id: 'ghana-cultural',
				slug: 'cultural-tours',
				name: 'Cultural Tours',
				description: [
					'Seamlessly streamline world-class paradigms and 2.0 materials. Completely network excellent bandwidth without extensive convergence. Continually facilitate user-centric portals whereas highly efficient core competencies.',
				],
				tours: [
					{
						id: 'tour-accra-heritage',
						slug: 'accra-city-heritage',
						title: 'Accra City Heritage Tour',
						type: 'family',
						price: 250,
						location: 'Accra, Ghana',
						duration: '10 Days, 11 Nights',
						groupSize: 50,
						rating: 5,
						popularity: 95,
						category: 'Adventure',
						tags: [ 'Destinations', 'Lifestyle' ],
						dateAdded: new Date('2023-11-10'),
                        mainImageUrl: '/assets/images/destinations/dest-1.jpg',
						description: [
							'Objectively leverage existing tactical core competencies for innovative innovation. Continually matrix unique resources for impactful solutions. Uniquely coordinate competitive e-tailers after resource maximizing benefits.',
							'Collaboratively predominate team building functionalities vis-a-vis holistic quality vectors. Appropriately plagiarize interdependent customer service without out-of-the-box internal or “organic” sources.',
						],
						detailsTable: {
							destination: 'Kotoka International Airport',
							departure: 'Yes Required',
							departureTime: '01 January, 2025 10:00AM',
							returnTime: '10 January, 2025 10:00AM',
						},
						included: [
							'Specialized Bilingual Guide',
							'Private Transport',
							'Entrance Fees',
							'Box Lunch, Water, Dinner and Snacks',
						],
						excluded: ['Additional Services', 'Insurance', 'Drink', 'Tickets'],
						tourPlan: [
							{
								day: 1,
								title: 'Departure & Arrival',
								details:
									'Arrive at Kotoka International Airport, meet your guide, and transfer to your hotel to settle in.',
							},
							{
								day: 2,
								title: 'Adventure Begins in Accra',
								details:
									'Authoritatively engage transparent users for standard compliant vortal. Explore the historic Jamestown and Independence Square.',
							},
							// ... Add all 10 days for this tour
						],
						gallery: [
							'/assets/images/destinations/dest-1.jpg',
							'/assets/images/destinations/dest-2.jpg',
							'/assets/images/destinations/dest-3.jpg',
							'/assets/images/destinations/dest-4.jpg',
                            '/assets/images/destinations/dest-5.jpg',                            
						],
						mapEmbedUrl:
							'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254133.3243388716!2d-0.3540896009949432!3d5.623490196853587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0x429204b3a4cf8164!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1701104101234!5m2!1sen!2sus',
					},
					{
						id: 'accra-city-experience',
						slug: 'accra-city-experience',
						title: 'Accra City Experience',
						type: 'group',
						price: 200,
						location: 'Accra, Ghana',
						duration: '5 Days, 6 Nights',
						groupSize: 100,
						rating: 5,
						popularity: 95,
						category: 'Religious Place',
						tags: [ 'Tourist', 'Hotels' ],
						dateAdded: new Date('2024-11-10'),
						mainImageUrl: '/assets/images/destinations/dest-3.jpg',
						description: [
							'Objectively leverage existing tactical core competencies for innovative innovation. Continually matrix unique resources for impactful solutions. Uniquely coordinate competitive e-tailers after resource maximizing benefits.',
							'Collaboratively predominate team building functionalities vis-a-vis holistic quality vectors. Appropriately plagiarize interdependent customer service without out-of-the-box internal or “organic” sources.',
						],
						detailsTable: {
							destination: 'Kotoka International Airport',
							departure: 'Yes Required',
							departureTime: '01 January, 2025 10:00AM',
							returnTime: '10 January, 2025 10:00AM',
						},
						included: [
							'Specialized Bilingual Guide',
							'Private Transport',
							'Entrance Fees',
							'Box Lunch, Water, Dinner and Snacks',
						],
						excluded: [ 'Additional Services', 'Insurance', 'Drink', 'Tickets' ],
						tourPlan: [
							{
								day: 1,
								title: 'Departure & Arrival',
								details:
									'Arrive at Kotoka International Airport, meet your guide, and transfer to your hotel to settle in.',
							},
							{
								day: 2,
								title: 'Adventure Begins in Accra',
								details:
									'Authoritatively engage transparent users for standard compliant vortal. Explore the historic Jamestown and Independence Square.',
							},
							// ... Add all 10 days for this tour
						],
						gallery: [
							'/assets/images/destinations/dest-1.jpg',
							'/assets/images/destinations/dest-2.jpg',
							'/assets/images/destinations/dest-3.jpg',
							'/assets/images/destinations/dest-4.jpg',
							'/assets/images/destinations/dest-5.jpg',
						],
						mapEmbedUrl:
							'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254133.3243388716!2d-0.3540896009949432!3d5.623490196853587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0x429204b3a4cf8164!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1701104101234!5m2!1sen!2sus',
					},
				],
			},
			{
				id: 'ghana-nature',
				slug: 'nature-and-wildlife',
				name: 'Nature & Wildlife',
				description: [
					'Completely engineer alternative mindshare vis-à-vis strategic total linkage. Efficiently formulate worldwide schemas without interdependent metric.',
				],
				tours: [
					{
						id: 'tour-kakum-national-park',
						slug: 'kakum-canopy-walk',
						title: 'Kakum National Park Adventure',
						type: 'group',
						price: 450,
						location: 'Cape Coast, Ghana',
						duration: '3 Days, 2 Nights',
						groupSize: 20,
						rating: 4,
						popularity: 85,
						category: 'Hill Tracking',
						tags: [ 'Destinations', 'Lifestyle' ],
						dateAdded: new Date('2024-11-10'),
						mainImageUrl: '/assets/images/destinations/dest-5.jpg', 
						description: ['...'],
						detailsTable: {
							destination: 'Kotoka International Airport',
							departure: 'Yes Required',
							departureTime: '01 January, 2025 10:00AM',
							returnTime: '10 January, 2025 10:00AM',
						},
						included: [],
						excluded: [],
						tourPlan: [],
                        gallery: [
                            '/assets/images/destinations/dest-1.jpg',
                            '/assets/images/destinations/dest-2.jpg',
                            '/assets/images/destinations/dest-3.jpg',
                            '/assets/images/destinations/dest-4.jpg',
                            '/assets/images/destinations/dest-5.jpg', 
                        ],
                        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254133.3243388716!2d-0.3540896009949432!3d5.623490196853587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0x429204b3a4cf8164!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1701104101234!5m2!1sen!2sus',
					},
				],
			},
		],
	},
	{
		id: 'dest-south-africa',
		slug: 'south-africa',
		name: 'South Africa',
		description: [
			'Welcome to the Rainbow Nation! A world of adventure awaits, from the iconic Table Mountain in Cape Town to the wild savannas of Kruger National Park.',
			'Experience a rich tapestry of cultures, breathtaking landscapes, and unforgettable wildlife encounters. South Africa offers a journey for every type of traveler.',
		],
		activityCategories: [
			{
				id: 'sa-safari',
				slug: 'safari-adventures',
				name: 'Safari Adventures',
				description: [
					"Embark on a journey into the wild to witness Africa's majestic animals in their natural habitat. Our expert guides will lead you on an unforgettable safari experience.",
				],
				tours: [
					{
						id: 'tour-kruger-classic',
						slug: 'kruger-classic-safari',
						title: 'The Kruger Classic Safari',
						type: 'solo',
						price: 1800,
						location: 'Kruger National Park',
						duration: '5 Days, 4 Nights',
						groupSize: 12,
						rating: 5,
						popularity: 85,
						category: 'Village Beauty',
						tags: [ 'Parks', 'Beach' ],
						dateAdded: new Date('2025-11-10'),
						mainImageUrl: '/assets/images/destinations/dest-3.jpg', 
						description: [
							"Experience the thrill of searching for the Big Five in one of Africa's most famous game reserves.",
						],
						detailsTable: {
							destination: 'Kotoka International Airport',
							departure: 'Yes Required',
							departureTime: '01 January, 2025 10:00AM',
							returnTime: '10 January, 2025 10:00AM',
						},
						included: [
							'Park Fees',
							'4x4 Game Drives',
							'Accommodation',
							'Most Meals',
						],
						excluded: ['International Flights', 'Gratuities', 'Some Drinks'],
						tourPlan: [
							{ day: 1, title: 'Arrival at Kruger', details: '...' },
							{ day: 2, title: 'Full Day Game Drive', details: '...' },
						],
                        gallery: [
                            '/assets/images/destinations/dest-1.jpg',
                            '/assets/images/destinations/dest-2.jpg',
                            '/assets/images/destinations/dest-3.jpg',
                            '/assets/images/destinations/dest-4.jpg',
                            '/assets/images/destinations/dest-5.jpg', 
                        ],
						mapEmbedUrl: '',
					},
				],
			},
		],
	},
]
