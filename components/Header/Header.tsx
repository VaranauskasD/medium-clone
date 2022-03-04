import React from 'react'
import Link from 'next/link'

interface HeaderProps {
  logo: React.ReactNode
}

export const Header = (props: HeaderProps) => {
  return (
    <header className="mx-auto flex justify-between p-5">
      <div className="flex space-x-5">
        <Link href="/">
          <a className="flex">
            {props.logo} <span className="mt-1 ml-2">Medium</span>
          </a>
        </Link>
        <nav className="hidden items-center space-x-5 md:inline-flex">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/follow">
            <a className="rounded-full bg-green-600 px-4 py-1 text-white">
              Follow
            </a>
          </Link>
        </nav>
      </div>
      <div className="flex items-center space-x-5 text-green-600">
        <Link href="/signin">Sign in</Link>
        <Link href="/login">
          <a className="rounded-full border border-green-600 px-4 py-1">
            Get Started
          </a>
        </Link>
      </div>
    </header>
  )
}
