import Link from 'next/link'
import React from 'react'


const layout = ({children}) => {
  return (
    <>
        <Link href={`/users`}>Back to users</Link>
        <div>{children}</div>
    </>
  )
}

export default layout