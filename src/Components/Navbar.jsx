import React from 'react'
import Hero1 from './hero/Hero1'
import Hero2 from './hero/Hero2'
import Hero3 from './hero/Hero3'
import { Link, Outlet } from 'react-router'
import Footer from './Footer'
import Head from './Head'

const Navbar = () => {
  return (
    <>
   <div className="h-screen w-full bg-[url('/images/head1.png')] bg-cover bg-center text-white ">
  

   <Head />




<div className='mt-36 ml-32'>
    <h1 className='pb-5 font-bold text-2xl'>Upcoming Launch</h1>
    <h1 className='pb-5 font-bold text-3xl'>CRS-25 MISSION</h1>
    <button className='text-center border-2 p-4'>REWATCH</button>
</div>
      </div>
      <div className='h-screen bg-[url("/images/wow.png")] bg-cover] text-white'>
      <div className='ml-32 pt-64'>
    <h1 className='font-bold text-2xl pb-5'>Recent Launch</h1>
    <h1 className='font-bold text-3xl pb-5'>STARLINK MISSION</h1>
    <button className='text-center border-2 p-4'>REWATCH</button>
</div>
     

      </div>
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Outlet />
      <Footer />
    </>
  )
}

export default Navbar
