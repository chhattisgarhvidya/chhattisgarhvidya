'use client'
import Image from 'next/image'
import React from 'react'
import load from '../public/cg-logo.svg'

export default function loading() {
  return (
    <div className='w-[98vw] bg-white h-screen flex items-center justify-center animate-blink'>
        <Image className='w-40 h-40' src={load} alt=''></Image>
    </div>
  )
}
