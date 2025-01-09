import React from 'react'
import { Link,Outlet } from 'react-router'

const Head = () => {
  return (
    <>
        <div  className='flex justify-between pt-10 '>

    <div className='ml-32 w-[150px]'>
    <img src="/images/logo.png" alt="" />
    </div>


<div className='flex gap-5 pr-4'>
    <Link to="/fal" className='text-md font-bold' href="">Flacon 9</Link>
    <Link to="/ful" className='text-md font-bold' href="">Flacon heavy</Link>
    <Link to="/dro" className='text-md font-bold' href="">Dragon</Link>
    <Link to="" className='text-md font-bold' href="">Starship</Link>
    <Link to="" className='text-md font-bold' href="">Human Spaceflight</Link>
    <Link to="" className='text-md font-bold' href="">Rideshare</Link>
    <Link to="" className='text-md font-bold' href="">Falcon 9</Link>
</div>
</div>
    </>
  )
}

export default Head
