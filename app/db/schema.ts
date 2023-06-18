import { InferModel } from 'drizzle-orm'
import {
  varchar,
  int,
  mysqlTable,
  serial,
  datetime,
} from 'drizzle-orm/mysql-core'

export const views = mysqlTable('views', {
  id: serial('id').primaryKey(),
  count: int('count').notNull().default(1),
})

export const geo = mysqlTable('geo', {
  id: serial('id'),
  country: varchar('country', { length: 50 }).notNull().primaryKey(),
  city: varchar('city', { length: 50 }),
  count: int('count').notNull().default(1),
})

export type Views = InferModel<typeof views>
