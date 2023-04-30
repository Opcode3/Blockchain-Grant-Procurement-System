import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const ErrorPage = () => {
  return (
    <div className='flex items-center justify-center flex-col min-h-screen w-full gap-0'>
      <Head>Error Page</Head>
        <h1 className='text-9xl text-prazzle-black'>404</h1>
        <h1 className='text-4xl text-prazzle-black mb-8 capitalize'>Page not found</h1>
        <p className='text-lg text-prazzle-black'>The resource requested could not be found on this server!</p>
    </div>
  )
}

export default ErrorPage