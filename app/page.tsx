import Image from 'next/image'
import Timer from './Timer'
import Music from './Music'
import RocketInfo from './RocketInfo'
import { db } from './db/db'
import { Progress } from '@/components/ui/progress'

export default async function Home() {
  const views = await db.query.views.findFirst({
    columns: { count: true },
  })

  const percentToNearestHundred = () => {
    if (!views?.count) return 0
    const nearestHundred = Math.ceil(views.count / 100) * 100
    var dx = Math.abs(views.count - nearestHundred)
    console.log('dx', dx)
    return (dx * 100) / 100
  }
  console.log(percentToNearestHundred())

  return (
    <div className='grid grid-rows-10 grid-cols-10 min-h-screen justify-items-center'>
      <div className='row-start-1 row-span-1 col-start-1 col-span-full z-[1] text-white '>
        <Timer />
      </div>
      {/* <div className='row-start-2 row-span-1 col-start-3 col-span-4 z-20 text-white w-full h-full flex gap-2 items-center'>
        <div>page views: {views?.count}</div>
        <Progress value={percentToNearestHundred()} className='w-1/2' />
      </div> */}
      <div className='row-start-2 row-span-1 col-start-1 col-span-full z-[1] text-white stroke-black'>
        <div className='text-4xl'>Next.js Moon</div>
        <div>Page views: {views?.count}</div>
        <div>Views until next launch: {percentToNearestHundred()}</div>
        <Progress value={100 - percentToNearestHundred()} className='w-full' />
      </div>
      <div className=' row-start-3 md:row-start-2 row-span-2 col-start-11 col-end-6  md:col-start-8  md:col-span-2 w-full h-full z-20'>
        <div className='relative min-w-full min-h-full'>
          {/* EARTH SHOULD BE THIS https://codecanyon.net/item/miniature-earth-interactive-3d-globe-for-javascript/23390670 with some way to zoom in */}
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
            src='/moon-terrain.jpg'
            alt='moon-background'
            fill
            className='object-cover w-auto h-auto'
          />
        </div>
      </div>
      <div />
      <div className='row-start-7 self-end row-span-1 col-start-3 col-span-1 z-20 text-white text-xs'>
        Something that grows on each node.js spaceship from earth. people with
        avatars and geo. like country colonies
      </div>

      {/* <div className='row-start-4 row-span-1 col-start-2 col-span-1 w-1/2 h-1/2 animate-[pulse_5s_ease-in-out_infinite] animate-satellite'> */}
      {/* <div
        id='laser-beam'
        className='h-[5px] w-full bg-red-500 z-20 animate-laserBeam'
      /> */}
      <div className='animate-satellite fixed row-start-4 w-full h-full'>
        <div className='w-[50px] h-[50px] animate-rotateCurve delay'>
          <div className='relative min-w-full min-h-full'>
            <Image
              src='/satellite-1.png'
              alt='satellite'
              fill
              className='object-contain w-auto h-auto'
            />
          </div>
        </div>
      </div>
      {/* <div className='row-start-7 row-span-1 col-start-3 col-span-1 w-full h-full'> */}
      <div className='row-start-6 md:row-start-5 row-span-4 col-start-8 col-span-3 w-full h-full grid grid-cols-4 grid-rows-4'>
        <div className=' row-start-3 row-span-1 col-start-2 col-span-1 md:self-end z-20'>
          <RocketInfo />
        </div>
        <div className='relative min-w-full min-h-full row-start-1 row-span-full col-start-1 col-span-full'>
          <Image
            src='/rocket-1.png'
            alt='rocket-1'
            fill
            className='object-contain w-auto h-auto'
          />
        </div>
      </div>

      {/* <div>Node.js Rocket</div> */}
      <div className='row-start-9 row-span-full col-start-1 col-span-full z-[1] self-end text-white w-full'>
        <Music />
      </div>
    </div>
  )
}
