import Link from 'next/link'
import React from 'react'

export default function aboutLayout({children}) {
  return (
    <>
    <nav className='mt-3 mb-3'>
        <ul className='flex gap-6'>
            <li><Link href="/about/mission">Mission</Link></li>
            <li><Link href="/about/vision">Vision</Link></li>
        </ul>
    </nav>
    {children}</>
  )
}
