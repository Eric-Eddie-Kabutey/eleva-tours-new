import { Button } from '../ui/button'
import { Checkbox } from '../ui/checkbox'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

export default function LeaveAReplyForm() {
	return (
		<div className='bg-[#f5f5f5] p-8 mt-16 rounded-lg'>
			<h3 className='text-2xl font-bold text-brand-dark mb-2'>Leave A Reply</h3>
			<p className='text-gray-500 mb-6'>
				Your email address will not be published. Required fields are marked *
			</p>
			<form className='space-y-4'>
				
				<Textarea placeholder='Write a Message' rows={5} className='bg-white' />
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
					<Input placeholder='Your Name' className='bg-white p-2' />
					<Input
						type='email'
						placeholder='Your Email'
						className='bg-white p-2'
					/>
				</div>
				<div className='flex items-center space-x-2'>
					<Checkbox id='save-info' />
					<label htmlFor='save-info'>
						Save my name, email, and website in this browser for the next time I
						comment.
					</label>
				</div>
				<Button className='bg-green-opaque hover:bg-green-opaque text-white font-semibold'>
					POST REVIEW
				</Button>
			</form>
		</div>
	)
}
