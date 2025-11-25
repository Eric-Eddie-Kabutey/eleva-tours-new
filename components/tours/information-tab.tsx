import { Check, X } from 'lucide-react'
import { FullTourDetails } from '@/lib/tour-details-data'

export function InformationTab({ tour }: { tour: FullTourDetails }) {
	return (
		<div className='space-y-8'>
			<div>
				<h1 className="text-4xl font-bold">{tour.title}</h1>
				<h3 className='text-2xl font-bold text-brand-dark mb-4'>Description</h3>
				<div className='space-y-4 text-gray-600 leading-relaxed'>
					{tour.description.map((p, i) => (
						<p key={i}>{p}</p>
					))}
				</div>
			</div>
			<div className='bg-gray-50 p-6 rounded-lg'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm'>
					{Object.entries(tour.detailsTable).map(([key, value]) => (
						<div key={key} className='flex justify-between border-b pb-2'>
							<span className='font-semibold text-gray-800 capitalize'>
								{key.replace(/([A-Z])/g, ' $1')}
							</span>
							<span className='text-gray-600'>{value}</span>
						</div>
					))}
				</div>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
				<div>
					<h4 className='font-bold text-lg mb-4'>Included</h4>
					<ul className='space-y-2'>
						{tour.included.map((item) => (
							<li key={item} className='flex items-center gap-2 text-gray-700'>
								<Check className='h-5 w-5 text-brand-green' /> {item}
							</li>
						))}
					</ul>
				</div>
				<div>
					<h4 className='font-bold text-lg mb-4'>Excluded</h4>
					<ul className='space-y-2'>
						{tour.excluded.map((item) => (
							<li key={item} className='flex items-center gap-2 text-gray-700'>
								<X className='h-5 w-5 text-red-500' /> {item}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}
