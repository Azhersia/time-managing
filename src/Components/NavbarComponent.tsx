import Link from 'next/link'
import React from 'react'

export default function NavbarComponent() {
  return (
    <div>
      <div className='bg-oliveShade w-full min-h-14 flex justify-center items-center gap-5 text-oliveText'>
        <Link href="/" className='hover:text-graywhite '>Projects</Link >
        <Link href="/manage">Manage</Link >
      </div>
    </div >
  )
}
