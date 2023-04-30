import Header from '@/components/baseLayout/header'
import Footer from '@/components/baseLayout/footer'
import React from 'react'
import HeroSection from '@/components/heroSection'

type LayoutProps = {
    children: React.ReactNode,
    title: string,
    page?: string,
    isFooter?: boolean
}

const Layout = ({children, title, page, isFooter}: LayoutProps) => {
  return (
    <div className='bg-[#F8F8F8] mx-auto max-w-full'>
      <div className=" bg-bgp-primary">
        <Header title={title} page={page} />
        <HeroSection />
      </div>
      <main className=' min-h-[50vh] max-w-full'>
        {children}
      </main>
      { isFooter !== undefined && isFooter ? <Footer /> : ''}
    </div>
  )
}
Layout.defaultProps = { title: "Prazzlle Inc.", isFooter: true}
export default Layout;
