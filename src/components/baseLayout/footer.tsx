import React from 'react'
import Logo from './logo'
import Link from 'next/link'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer> CopyRight {year} &copy; Blockchain Grants Procurement System</footer>
  )
}

export default Footer