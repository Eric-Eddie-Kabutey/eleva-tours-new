'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

export function BookingForm({ price }: { price: number }) {
	// Add form handling logic here with react-hook-form if needed
	return (
		<div className='bg-gray-50 p-6 rounded-lg shadow-lg  top-24'>
			<div className='bg-green-opaque text-white p-4 rounded-t-lg flex justify-between items-center'>
				<h3 className='font-bold text-lg'>Book This Tour</h3>
				<p className='font-semibold'>${price} per person</p>
			</div>
			<form className='p-6 bg-white rounded-b-lg space-y-4'>
				<Input placeholder='Your Name' />
				<Input type='email' placeholder='Your Email' />
				<Input type='tel' placeholder='Phone Number' />
				<Select>
					<SelectTrigger>
						<SelectValue placeholder='Ticket Types' />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='standard'>Standard</SelectItem>
					</SelectContent>
				</Select>
				<div className='grid grid-cols-2 gap-4'>
					<Select>
						<SelectTrigger>
							<SelectValue placeholder='Adult' />
						</SelectTrigger>
						<SelectContent>
							{[...Array(5)].map((_, i) => (
								<SelectItem key={i} value={`${i + 1}`}>
									{i + 1}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					<Select>
						<SelectTrigger>
							<SelectValue placeholder='Child' />
						</SelectTrigger>
						<SelectContent>
							{[...Array(5)].map((_, i) => (
								<SelectItem key={i} value={`${i}`}>
									{i}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
				<Input type='text' placeholder='mm/dd/yyyy' />{' '}
				{/* Can be replaced with a Popover Calendar */}
				<Textarea placeholder='Your Message' />
				<Button className='w-full bg-green-opaque hover:bg-brand-green-opaque text-white font-bold h-12'>
					BOOK NOW
				</Button>
			</form>
		</div>
	)
}
