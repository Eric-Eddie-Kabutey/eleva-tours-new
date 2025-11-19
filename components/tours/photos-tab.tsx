import Image from 'next/image'

export function PhotosTab({ gallery }: { gallery: string[] }) {
	return (
		<div>
			<h3 className='text-2xl font-bold text-brand-dark mb-6'>Tour Photos</h3>
			<div className='grid grid-cols-2 gap-4'>
				{/* Special layout for the gallery */}
				<div className='col-span-1 row-span-2'>
					<div className='relative aspect-[3/4] rounded-xl overflow-hidden'>
						<Image
							src={gallery[0]}
							alt='Gallery image 1'
							fill
							className='object-cover'
						/>
					</div>
				</div>
				<div className='col-span-1'>
					<div className='relative aspect-video rounded-xl overflow-hidden'>
						<Image
							src={gallery[1]}
							alt='Gallery image 2'
							fill
							className='object-cover'
						/>
					</div>
				</div>
				<div className='col-span-1 grid grid-cols-2 gap-4'>
					<div className='col-span-2'>
						<div className='relative aspect-video rounded-xl overflow-hidden'>
							<Image
								src={gallery[2]}
								alt='Gallery image 3'
								fill
								className='object-cover'
							/>
						</div>
					</div>
					<div className='col-span-2'>
						<div className='relative aspect-video rounded-xl overflow-hidden'>
							<Image
								src={gallery[3]}
								alt='Gallery image 4'
								fill
								className='object-cover'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
