'use client'

import { useState, useMemo } from 'react'
import { Tour } from '@/data/destinations-data'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { TourCard } from './tour-card'
import { TourCategoriesWidget } from './tour-categories-widget'
import { LastMinuteDealsWidget } from './last-minute-deals'
import { AdventureAdWidget } from './adventure-ad-widget'

import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
} from '@/components/ui/pagination'

const ITEMS_PER_PAGE = 8

export function TourGridWithFilters({ allTours }: { allTours: Tour[] }) {
	const [searchTerm, setSearchTerm] = useState('')
	const [currentPage, setCurrentPage] = useState(1)

	// Filter and paginate data on the client side
	const filteredTours = useMemo(() => {
		let tours = allTours
		if (searchTerm) {
			tours = tours.filter((tour) =>
				tour.title.toLowerCase().includes(searchTerm.toLowerCase())
			)
		}
		return tours
	}, [searchTerm, allTours])

	const totalPages = Math.ceil(filteredTours.length / ITEMS_PER_PAGE)
	const currentTours = filteredTours.slice(
		(currentPage - 1) * ITEMS_PER_PAGE,
		currentPage * ITEMS_PER_PAGE
	)

	return (
		<div className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
			{/* Main Content (Tour Grid) */}
			<div className='lg:col-span-2 xl:col-span-3'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					{currentTours.map((tour) => (
						<TourCard key={tour.id} tour={tour} />
					))}
				</div>

				{/* Pagination */}
				{totalPages > 1 && (
					<div className='mt-12'>
						<Pagination>
							<PaginationContent>
								<PaginationItem>
									<Button
										variant='outline'
										onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
										disabled={currentPage === 1}>
										Previous
									</Button>
								</PaginationItem>
								{[...Array(totalPages).keys()].map((page) => (
									<PaginationItem key={page + 1}>
										<PaginationLink
											href='#'
											isActive={currentPage === page + 1}
											onClick={() => setCurrentPage(page + 1)}>
											{page + 1}
										</PaginationLink>
									</PaginationItem>
								))}
								<PaginationItem>
									<Button
										variant='outline'
										onClick={() =>
											setCurrentPage((p) => Math.min(totalPages, p + 1))
										}
										disabled={currentPage === totalPages}>
										Next
									</Button>
								</PaginationItem>
							</PaginationContent>
						</Pagination>
					</div>
				)}
			</div>

			{/* Sidebar */}
			<aside className='space-y-8'>
				<div className='relative bg-[#f5f5f5] py-4 px-6'>
					<Input
						placeholder='Enter Keyword'
						className='h-12 pl-4 pr-12 bg-white'
						value={searchTerm}
						onChange={(e) => {
							setSearchTerm(e.target.value)
							setCurrentPage(1) // Reset page on search
						}}
					/>
					<Button
						size='icon'
						className='absolute top-1/2 right-2 -translate-y-1/2 h-9 w-9 bg-green-opaque hover:bg-green-opaque text-white'>
						<Search className='h-5 w-5' />
					</Button>
				</div>
				<TourCategoriesWidget />
				<LastMinuteDealsWidget />
				<AdventureAdWidget />
			</aside>
		</div>
	)
}
