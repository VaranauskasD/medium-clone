import React from 'react'

interface BannerProps {
  header: String
  subtext: String
  logo: React.ReactNode
}

export const Banner = (props: BannerProps) => {
  return (
    <div className="flex items-center justify-between space-y-5 border-y border-black bg-yellow-400 py-10 px-10 lg:py-0">
      <div className="">
        <h1 className="max-w-xl font-serif text-6xl">{props.header}</h1>
        <div>{props.subtext}</div>
      </div>
      <div className="hidden h-48 md:inline-flex lg:h-full">{props.logo}</div>
    </div>
  )
}
