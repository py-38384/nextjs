import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About page',
  description: 'welcome to my site about'
}

const About = () => {
  return (
    <h1>About page</h1>
  )
}

export default About