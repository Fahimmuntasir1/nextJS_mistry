import Image from 'next/image'
import React from 'react'
import dog from '@/public/image/mr.wick.jpg'

export default function Vission() {
  return (
    <>
    <h1 className='text-4xl'>What is your Vision?</h1>
    <Image placeholder='blur' src={dog} alt='image' />
    </>
  )
}
