interface TalLineProp {
    title: string;
    hasLeftLine?: boolean
    hasRightLine?: boolean
}

export default function TagLines({ title, hasLeftLine = false, hasRightLine = false }:  TalLineProp) {
    return (
        <div className="flex items-center justify-center gap-4">
              { hasLeftLine && <div className='flex -items-center gap-2'>
							<div className='w-4 h-[2px] bg-green-opaque' />
							<div className='w-4 h-[2px] bg-green-opaque' />
							<div className='w-10 h-[2px] bg-green-opaque' />
						</div>}
              <p className="font-style text-brand-green text-2xl mb-2">{title}</p>
             {hasRightLine && <div className='flex -items-center gap-2'>
							<div className='w-10 h-[2px] bg-green-opaque' />
							<div className='w-4 h-[2px] bg-green-opaque' />
							<div className='w-4 h-[2px] bg-green-opaque' />
              </div> }                 
              </div>
    )
}