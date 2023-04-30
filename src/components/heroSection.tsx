import React from 'react'

const HeroSection = () => {
  return (
    <div className='h-[450px] flex items-center px-[7%]'>
        <div className="w-9/12 flex justify-center mx-auto gap-3 flex-col">
            <h2 className='text-center font-sigmar text-4xl text-white'>Blockchain Grants Procurement System</h2>
            <p className='text-center text-xl text-white mt-5'>
                Our platform uses smart contracts to automate the grant approval process, reducing the need for human intervention and making the process faster and more reliable.
                We also ensure that the grant allocation process is fair and transparent. Every transaction is recorded on the blockchain, and all parties involved can see the details of the transaction in real-time.
            </p>
        </div>
    </div>
  )
}

export default HeroSection