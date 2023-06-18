import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { db } from './app/db/db'
import { geo, views } from './app/db/schema'
import { sql } from 'drizzle-orm'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  db.update(views)
    .set({
      count: sql`${views.count} + 1`,
    })
    .execute()

  const country = request.geo?.country
  const city = request.geo?.city
  country &&
    db
      .insert(geo)
      .values({
        country: country,
        city: city,
      })
      .onDuplicateKeyUpdate({
        set: {
          count: sql`${geo.count} + 1`,
        },
      })
      .execute()

  // return NextResponse.redirect(new URL('/home', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/',
}
