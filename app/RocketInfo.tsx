import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import Image from 'next/image'

export default function RocketInfo() {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger>
          <div className='grid place-items-center'>
            <div className=' bg-sky-400 rounded-full w-4 h-4 z-10 row-span-full col-span-full' />
            <div className=' bg-sky-500 rounded-full w-8 h-8 row-span-full col-span-full animate-pulse' />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <div className='flex flex-col gap-2 max-w-sm p-2'>
            <Image
              src='/v8.png'
              alt='chrome-v8-runtime'
              width={50}
              height={100}
            />
            <p>
              This smaller rocket uses the{' '}
              <span className='font-bold'>minimal Chrome V8 runtime</span>.
            </p>
            <p>
              It can only use a subset of web apis, but is{' '}
              <span className='font-bold'>lightweight</span> enough to be run in{' '}
              <span className='font-bold'>
                constricted operating environments
              </span>{' '}
              like {'edge runtimes'}.
            </p>
            <p>
              Or in this case – the{' '}
              <span className='font-bold'>low-gravity</span> environment 
              <span className='font-bold'>of the moon!</span>
            </p>
            <button className='border rounded-lg px-2 py-1 w-fit bg-slate-50 hover:bg-slate-100 self-center'>
              Launch rocket!
            </button>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
