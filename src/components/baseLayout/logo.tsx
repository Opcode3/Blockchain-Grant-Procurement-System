import React from 'react'
import Sdg17Icon from '../icon/sdg17'

const Logo = () => {
  return (
    <div className='py-3 px-4 min-w-fit flex items-center gap-1'>
        <span className=' w-24 inline bg-red-400'><Sdg17Icon /></span>
        <span className='text-white font-semibold text-xl'>BGP System</span>
    </div>
  )
}

export default Logo