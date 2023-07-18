import { NavLinks } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import AuthProvider from "./AuthProviders"
import AuthProviders from "./AuthProviders"

const Navbar = () => {
  const session = {}
  return (
    <nav className='flexBetween navbar'>
      <div className='flex-1 flexStart gap-10'>
        <Link href='/'>
          <Image src='/logo.svg' alt='flexibble logo' width={115} height={43} />
        </Link>
        <ul className='xl:flex hidden text-small gap-7'>
          {NavLinks.map(({ href, key, text }) => (
            <Link key={key} href={href}>
              {text}
            </Link>
          ))}
        </ul>
      </div>
      <div className='flexCenter gap-4'>
        {session ? (
          <>
            UserPhoto
            <Link href='/create-project'>Shar Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  )
}

export default Navbar
