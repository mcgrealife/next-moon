import Image from 'next/image'
import Timer from './Timer'
import './globals.css'
import Music from './Music'
import Script from 'next/script'

export const metadata = {
  title: 'Next.js Moon',
  description: 'Exploring Next.js app router features, on the moon.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='bg-black'>
      <body>
        {children}
        {/* <Script
          src='https://static.cloudflareinsights.com/beacon.min.js'
          data-cf-beacon='{"token": "b889a3aa44e0432f9882d9e6578d1628"}'
        /> */}
        <script
          defer
          src='https://static.cloudflareinsights.com/beacon.min.js'
          data-cf-beacon='{"token": "b889a3aa44e0432f9882d9e6578d1628"}'></script>
      </body>
    </html>
  )
}
