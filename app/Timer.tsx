'use client'

import { useEffect, useState } from 'react'

export default function Timer() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className='flex gap-2'>
      <div>Next moon landing:</div>
      <div>{seconds}</div>
    </div>
  )
}
