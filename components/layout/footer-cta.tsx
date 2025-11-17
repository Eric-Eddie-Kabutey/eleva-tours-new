"use client";

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { Mail } from 'lucide-react'

export default function FooterCta() {
	const [email, setEmail] = useState('')

	const handleSubscribe = (e: React.FormEvent) => {
		e.preventDefault()
		// Handle newsletter subscription logic here
		console.log('Subscribing with email:', email)
		alert(`Thank you for subscribing with ${email}!`)
		setEmail('')
	}
	return (
		<div className=' -mb-52 bg-[#F5F5F5]'>
			{/* ====== NEWSLETTER CTA SECTION ====== */}
			<div className='container max-w-5xl mx-auto px-4 relative bg-yellow-opaque text-white p-8 md:p-12 rounded-3xl'>
				{/* Decorative elements */}								
				<div className='absolute inset-2 md:inset-6 opacity-60'>
					<Image
						src='/assets/images/home/subscribe-bg.svg'
						alt=''
						layout='fill'
						objectFit='contain'
					/>
				</div>

				<div className='relative text-center max-w-2xl mx-auto'>
					<h2 className='font-title text-3xl md:text-4xl font-bold'>
						Get Special Offers And More From Travon
					</h2>
					<p className='mt-2 text-white/80'>
						Sign up now and get the best deals straight in your inbox!
					</p>
					<form
						onSubmit={handleSubscribe}
						className='mt-6 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto'>
						<div className='relative flex-grow'>
							<Input
								type='email'
								placeholder='Email Address'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className='h-14 pl-6 pr-12 text-green-opaque bg-white'
								required
							/>
							<Mail className='absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-green-opaque' />
						</div>
						<Button
							type='submit'
							className='h-14 px-8 bg-green-opaque hover:bg-green-opaque hover:text-yellow-opaque text-white font-bold'>
							SUBSCRIBE
						</Button>
					</form>
				</div>
			</div>
		</div>
	)
}
