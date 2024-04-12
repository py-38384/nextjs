import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import type { Metadata } from 'next'

// export const metadata: Metadata = {
//   title: 'Home with',
//   description: 'welcome to my site'
// }

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hallo world</h1>
    </main>
  )
}
