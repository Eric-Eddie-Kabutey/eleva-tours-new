export type Tour = {
	id: string
	imageUrl: string
	location: string
	rating: number
	title: string
	durationDays: number
	capacity: number
	price: number
	href: string
	category: string // Add a category for filtering
}

export const toursData: Tour[] = [
	// Page 1
	{
		id: 'br-1',
		imageUrl: '/assets/images/destinations/dest-1.jpg',
		location: 'Madrid, Spain',
		rating: 5,
		title: 'Brooklyn Beach Resort Tour',
		durationDays: 10,
		capacity: 50,
		price: 250,
		href: '/tours/brooklyn-beach',
		category: 'Sea Area',
	},
	{
		id: 'ct-1',
		imageUrl: '/assets/images/destinations/dest-2.jpg',
		location: 'Chumphon, Thailand',
		rating: 5,
		title: 'Pak Chumphon Town Tour',
		durationDays: 12,
		capacity: 70,
		price: 450,
		href: '/tours/chumphon-town',
		category: 'Village Beauty',
	},
	{
		id: 'bl-1',
		imageUrl: '/assets/images/destinations/dest-3.jpg',
		location: 'Lasvegas, USA',
		rating: 5,
		title: 'Bali One Life Adventure',
		durationDays: 7,
		capacity: 52,
		price: 350,
		href: '/tours/bali-adventure',
		category: 'Adventure',
	},
	{
		id: 'ptn-1',
		imageUrl: '/assets/images/destinations/dest-4.jpg',
		location: 'Barcelona, Spain',
		rating: 5,
		title: 'Places To Travel November',
		durationDays: 13,
		capacity: 100,
		price: 550,
		href: '/tours/places-november',
		category: 'Night View',
	},
	{
		id: 'bcl-1',
		imageUrl: '/assets/images/destinations/dest-5.jpg',
		location: 'Lasvegas, USA',
		rating: 4,
		title: 'Brooklyn Christmas Lights',
		durationDays: 15,
		capacity: 312,
		price: 600,
		href: '/tours/brooklyn-christmas',
		category: 'Night View',
	},
	{
		id: 'dik-1',
		imageUrl: '/assets/images/destinations/dest-2.jpg',
		location: 'Madrid, Spain',
		rating: 5,
		title: 'Discovery Island Kayaking',
		durationDays: 18,
		capacity: 500,
		price: 250,
		href: '/tours/discovery-kayaking',
		category: 'Lake View',
	},
	{
		id: 'lgf-1',
		imageUrl: '/assets/images/destinations/dest-1.jpg',
		location: 'Chumphon, Thailand',
		rating: 5,
		title: 'Los Glaciares & Fitz Trip',
		durationDays: 20,
		capacity: 50,
		price: 250,
		href: '/tours/los-glaciares',
		category: 'Hill Tracking',
	},
	{
		id: 'kct-1',
		imageUrl: '/assets/images/destinations/dest-4.jpg',
		location: 'Lasvegas, USA',
		rating: 4,
		title: 'Kupland Christmas Tour',
		durationDays: 6,
		capacity: 60,
		price: 250,
		href: '/tours/kupland-christmas',
		category: 'Resourt',
	},
	// Add more data for pagination...
]

export const tourCategories = [
	{ name: 'Hill Tracking', count: 8, href: '/tours?category=hill-tracking' },
	{ name: 'Adventure', count: 5, href: '/tours?category=adventure' },
	{ name: 'Village Beauty', count: 6, href: '/tours?category=village-beauty' },
	{ name: 'Night View', count: 8, href: '/tours?category=night-view' },
	{
		name: 'Religious Place',
		count: 7,
		href: '/tours?category=religious-place',
	},
	{ name: 'Lake View', count: 3, href: '/tours?category=lake-view' },
	{ name: 'Sea Area', count: 5, href: '/tours?category=sea-area' },
	{ name: 'Resourt', count: 4, href: '/tours?category=resourt' },
]

export const lastMinuteDeals = [
	{
		id: 'deal-bcl',
		title: 'Brooklyn Christmas Lights',
		price: 250,
        imageUrl: '/assets/images/tours/recent-tour-1.jpg',
		href: '#',
	},
	{
		id: 'deal-jbl',
		title: 'Java & Bali One Life Adventure',
		price: 250,
        imageUrl: '/assets/images/tours/recent-tour-2.jpg',
		href: '#',
	},
	{
		id: 'deal-ptn',
		title: 'Places To Travel In November',
		price: 250,
        imageUrl: '/assets/images/tours/recent-tour-3.jpg',
		href: '#',
	},
	{
		id: 'deal-pct',
		title: 'Pak Nam Chumphon Town Tour',
		price: 250,
        imageUrl: '/assets/images/tours/recent-tour-4.jpg',
		href: '#',
	},
]
