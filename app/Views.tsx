'use client'

import { useEffect } from 'react'

export default async function Views() {
  console.log('views')
  useEffect(() => {
    console.log('querying')
    const query = `
  query {
    viewer {
      zones(filter: { zoneTag: "${`Analytics`}" }) {
        httpRequests1mGroups(limit: 1, orderBy: [date_ASC], filter: { date_gt: "2000-01-01T00:00:00Z" }) {
          sum {
            pageViews
          }
        }
      }
    }
  }
`
    fetch('https://api.cloudflare.com/client/v4/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.CLOUDFLARE_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Process the response data here
        console.log(data)
      })
      .catch((error) => {
        // Handle any errors
        console.error('Error:', error)
      })

    // const views = (async () => {
    //   const res = await fetch('https://api.cloudflare.com/client/v4/graphql', {
    //     method: 'POST',
    //     // headers: {
    //     //   'Content-Type': 'application/json',
    //     //   'X-Auth-Email': process.env.CLOUDFLARE_EMAIL,
    //     //   'X-AUTH-KEY': process.env.CLOUDFLARE_TOKEN,
    //     // }
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'X-Auth-Email': process.env.CLOUDFLARE_EMAIL,
    //       'X-AUTH-KEY': process.env.CLOUDFLARE_TOKEN,
    //       // Authorization: 'Bearer ' + process.env.CLOUDFLARE_TOKEN,
    //     },
    //     body: JSON.stringify({
    //       query:
    //     }),
    //   })
    // })()
  }, [])
  return null
}
