import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'

const layout = ({children}) => {
  return (
    <>
    <section className={styles.h1}>
        <Link href={`/`}>Home</Link>
        <h2>about layout</h2>
        <div>{children}</div>
    </section>
    </>
  )
}

export default layout