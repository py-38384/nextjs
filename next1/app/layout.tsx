import './globals.css'
import Link from 'next/link'

import type { Metadata } from 'next'

// export const metadata: Metadata = {
//   title: 'base page',
//   description: 'welcome to my site base'
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <nav>
          <ul>
            <li><Link href={`about`}>About</Link></li>
            <li><Link href={`contact`}>Contact us</Link></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
