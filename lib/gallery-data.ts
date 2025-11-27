// For Image Gallery
export type GalleryPhoto = {
	id: string
	src: string
	width: number // Intrinsic width of the image
	height: number // Intrinsic height of the image
	alt: string
}

// For Video Gallery
export type GalleryVideo = {
	id: string
	thumbnail: string
	width: number
	height: number
	alt: string
	sources: { src: string; type: string }[]
}

export const imageGalleryData: GalleryPhoto[] = [
	{
		id: 'img1',
		src: '/assets/images/gallery/gallery-1.jpg',
		width: 1080,
		height: 720,
		alt: 'Infinity pool deck',
	},
	{
		id: 'img2',
        src: '/assets/images/gallery/gallery-2.jpg',
		width: 800,
		height: 1200,
		alt: 'Aerial view of resort pools',
	},
	{
		id: 'img3',
        src: '/assets/images/gallery/gallery-3.jpg',
		width: 1080,
		height: 720,
		alt: 'Aerial view of hut-style villas',
	},
	{
		id: 'img4',
        src: '/assets/images/gallery/gallery-4.jpg',
		width: 1080,
		height: 720,
		alt: 'Poolside lounge chairs',
	},
	{
		id: 'img5',
        src: '/assets/images/gallery/gallery-5.jpg',
		width: 1080,
		height: 720,
		alt: 'Hotel bed on a deck overlooking mountains',
	},
	{
		id: 'img6',
        src: '/assets/images/gallery/gallery-6.jpg',
		width: 800,
		height: 1200,
		alt: 'Seaplane on a tropical beach',
	},
]

export const videoGalleryData: GalleryVideo[] = [
	{
		id: 'vid1',
        thumbnail: '/assets/images/home/video-thumbnail.jpg',
		width: 1080,
		height: 720,
		alt: 'Infinity pool video',
        sources: [ { src: '/assets/videos/experience-video.mp4', type: 'video/mp4' }],
	},
	{
		id: 'vid2',
        thumbnail: '/assets/images/home/video-thumbnail.jpg',
		width: 1080,
		height: 720,
		alt: 'Resort pools video',
        sources: [ { src: '/assets/videos/experience-video.mp4', type: 'video/mp4' }],
	},
	{
		id: 'vid3',
        thumbnail: '/assets/images/home/video-thumbnail.jpg',
		width: 1080,
		height: 720,
		alt: 'Sunset over mountains video',
        sources: [ { src: '/assets/videos/experience-video.mp4', type: 'video/mp4' }],
	},
	{
		id: 'vid4',
        thumbnail: '/assets/images/home/video-thumbnail.jpg',
		width: 800,
		height: 1200,
		alt: 'Hut villas video',
        sources: [ { src: '/assets/videos/experience-video.mp4', type: 'video/mp4' }],
	},
]
