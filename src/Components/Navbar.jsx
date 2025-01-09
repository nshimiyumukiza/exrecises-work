import React from 'react'
import Hero1 from './hero/Hero1'
import Hero2 from './hero/Hero2'
import Hero3 from './hero/Hero3'
import { Link } from 'react-router'
import Footer from './Footer'

const Navbar = () => {
  return (
    <>
   <div className="h-screen w-full bg-[url('/images/head1.png')] bg-cover bg-center text-white ">
   <div  className='flex justify-between pt-10 '>
<div>
    <div className='ml-32 w-[150px]'>
       <img src="/images/logo.png" alt="" />
   
    </div>

</div>
<div className='flex gap-5 pr-4'>
    <Link to="fal" className='text-md font-bold' href="">Flacon 9</Link>
    <Link to="ful" className='text-md font-bold' href="">Flacon heavy</Link>
    <Link to="dro" className='text-md font-bold' href="">Dragon</Link>
    <Link to="" className='text-md font-bold' href="">Starship</Link>
</div>
</div>
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
      <Footer />
    </>
  )
}

export default Navbar
