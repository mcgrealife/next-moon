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
          <Image
            src='/v8.png'
            alt='chrome-v8-runtime'
            width={50}
            height={100}
          />
          <p>This rocket uses the Chrome V8 runtime. </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
