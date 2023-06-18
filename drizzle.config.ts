import type { Config } from 'drizzle-kit'

// export const dbConnectionString = process.env.PLANETSCALE_CONNECTION_STRING
export const dbConnectionString = `mysql://p21r9sk4926r3gjv84ck:pscale_pw_n35HMWSiqgIIBuGo3xSf07Jast1uToQ6RWsBUcKwbku@aws.connect.psdb.cloud/next-moon?ssl={"rejectUnauthorized":true}`

// if (!dbConnectionString) throw new Error('no database connection string')
export default {
  schema: './app/db/schema.ts',
  out: './drizzle',
  driver: 'mysql2',
  dbCredentials: { connectionString: dbConnectionString },
} satisfies Config
