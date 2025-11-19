import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { TourPlanDay } from '@/lib/tour-details-data'

export function TourPlanTab({ plan }: { plan: TourPlanDay[] }) {
	return (
		<div>
			<h3 className='text-2xl font-bold text-brand-dark mb-6'>Tour Plan</h3>
			<Accordion type='single' collapsible className='w-full space-y-4'>
				{plan.map((day) => (
					<AccordionItem
						key={day.day}
						value={`item-${day.day}`}
						className='bg-gray-50 rounded-lg px-6 border-none'>
						<AccordionTrigger>
							Day {String(day.day).padStart(2, '0')}: {day.title}
						</AccordionTrigger>
						<AccordionContent>
							{day.details || 'No details for this day.'}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	)
}
