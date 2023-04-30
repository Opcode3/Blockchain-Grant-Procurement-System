import React from 'react'
import Logo from './logo'
import Link from 'next/link'
import Head from 'next/head'

const Header = ({title, page}: {title: string, page?: string}) => {
    const navLinks = [
        {name: 'About Project', url: 'about', page: 'about'},
        {name: 'Search Grants', url: 'search', page: 'search'},
        {name: 'Applicants', url: 'applicants', page: 'applicants'},
        {name: 'Grantors', url: 'grantors', page: 'grantors'},
        {name: 'Learn Grants', url: 'learn', page: 'learn'},
    ]
  return (
    <header>
        <Head>
            <title>{title} - Blockchain Grants Procurement System</title>
        </Head>
        <div className=" flex items-center justify-between py-4 px-[7%]">
            <Link href='' className=""> <Logo /> </Link>
            <ul className=' flex items-center'>
                {
                    navLinks.map(link => <li><Link className={`px-3 py-2 ${page == link.page ? 'text-black': 'text-white'}`} href={link.url}>{link.name}</Link></li>)
                }
                <li></li>
            </ul>
        </div>
    </header>
  )
}

export default Header