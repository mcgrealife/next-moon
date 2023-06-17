import Image from 'next/image'
import Timer from './Timer'
import '@/app/globals.css'
import Music from './Music'

export const metadata = {
  title: 'Next.js Moon',
  description: 'Exploring Next.js app router features, on the moon.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='bg-black'>
      <body className='grid grid-rows-10 grid-cols-10 min-h-screen justify-items-center'>
        <div className='row-start-1 row-span-full col-start-1 col-span-full justify-items-center z-[1] text-white stroke-black stroke-2'>
          <Timer />
        </div>

        <div className='row-start-2 row-span-full col-start-1 col-span-full z-[1] text-white stroke-black'>
          {children}
        </div>
        <div className='row-start-2 row-span-2 col-start-8 col-span-2 w-full h-full'>
          <div className='relative min-w-full min-h-full'>
            <Image
              src='/earth-phase-1-alpha.png'
              alt='earth-phase-1'
              fill
              className='object-cover w-auto h-auto'
            />
          </div>
        </div>
        <div className='row-start-5 row-span-full col-start-1 col-span-full w-full h-full'>
          <div className='relative min-w-full min-h-full'>
            <Image
              src='/moon-alpha.png'
              alt='moon-background'
              fill
              className='object-cover w-auto h-auto'
            />
          </div>
        </div>
        {/* <div className='row-start-7 row-span-1 col-start-3 col-span-1 w-full h-full'>
          <div className='relative min-w-full min-h-full'>
            <Image
              src='/rocket-base-1.png'
              alt='rocket-base-1'
              fill
              className='object-contain w-auto h-auto'
            />
          </div>
        </div> */}

        {/* <div className=''>Edge V8 Rocket</div>
        <div>Node.js Rocket</div> */}
        <div className='row-start-9 row-span-full col-start-1 col-span-full z-[1] self-end text-white w-full'>
          <Music />
        </div>
      </body>
    </html>
  )
}
