import { connect } from '@planetscale/database'
import { drizzle } from 'drizzle-orm/planetscale-serverless'
import * as schema from './schema'
import { dbConnectionString } from '@/drizzle.config'

if (!dbConnectionString) throw new Error('no database connection string')

const connection = connect({ url: dbConnectionString })
export const db = drizzle(connection, { schema })
export type DbClient = typeof db
