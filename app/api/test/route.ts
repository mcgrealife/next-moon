import { db } from '@/app/db/db'
import { geo, views } from '@/app/db/schema'
import { sql } from 'drizzle-orm'
import { NextResponse } from 'next/server'

export const runtime = 'edge'
export const preferredRegion = 'cle1'

export async function GET() {
  // const t = await db
  //   .insert(geo)
  //   .values({
  //     country: 'US',
  //     city: 'New York',
  //   })
  //   .onDuplicateKeyUpdate({
  //     set: {
  //       count: sql`${geo.count} + 1`,
  //     },
  //   })
  // console.log('t', t)
  // NextResponse.json(t)
}
