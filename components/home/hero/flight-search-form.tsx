'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

export function FlightSearchForm() {
	return (
		<div className='bg-green-opaque p-2 md:p-4'>
			<RadioGroup defaultValue='round-trip' className='flex gap-4 mb-4'>
				<div className='flex items-center space-x-2'>
					<RadioGroupItem value='one-way' id='one-way' className='text-yellow-opaque' />
					<Label htmlFor='one-way'>One Way</Label>
				</div>
				<div className='flex items-center space-x-2'>
					<RadioGroupItem value='round-trip' id='round-trip' className='text-yellow-opaque' />
					<Label htmlFor='round-trip'>Round Trip</Label>
				</div>
			</RadioGroup>
			<div className='grid grid-cols-1 md:grid-cols-6 gap-4 items-center'>
				<Input
					placeholder='Flying From'
					className='h-14 md:col-span-2 bg-white text-gray-900'
				/>
				<Input
					placeholder='Flying To'
					className='h-14 md:col-span-2 bg-white text-gray-900'
				/>
				<Input placeholder='Depart' className='h-14 bg-white text-gray-900' />
				<Button className='h-14 bg-yellow-opaque text-green-opaque hover:bg-green-opaque hover:text-yellow-opaque border hover:border-yellow-opaque'>
					Search
				</Button>
			</div>
		</div>
	)
}
