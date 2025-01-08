import React from 'react'
import Hero1 from './hero/Hero1'
import Hero2 from './hero/Hero2'
import Hero3 from './hero/Hero3'
import Hero4 from './hero/Hero4'
import Footer from './Footer'
import Head from './Head'

const Navbar = () => {
  return (
    <>
   <div className="h-screen w-full bg-[url('src/images/head.png')] bg-cover bg-center text-white ">
 <Head />
<div className='mt-36 ml-32'>
    <h1 className='pb-5 font-bold text-2xl'>Upcoming Launch</h1>
    <h1 className='pb-5 font-bold text-3xl'>CRS-25 MISSION</h1>
    <button className='text-center border-2 p-4'>REWATCH</button>
</div>
      </div>
      <div className='h-screen bg-[url("src/images/wow.png")] bg-cover] text-white'>
      <div className='ml-32 pt-64'>
    <h1 className='font-bold text-2xl pb-5'>Recent Launch</h1>
    <h1 className='font-bold text-3xl pb-5'>STARLINK MISSION</h1>
    <button className='text-center border-2 p-4'>REWATCH</button>
</div>
     

      </div>
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Footer />
    </>
  )
}

export default Navbar
