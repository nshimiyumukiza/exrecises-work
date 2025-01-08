import Head from "../Head"
import Footer from "../Footer"

const Section3 = () => {
  return (
    <>
              <div className='h-screen w-full bg-[url("src/images/kalisa.png")] bg-cover text-white'>
       <Head />
       <div className="h-screen flex flex-col justify-center items-center">
  <h1 className="text-4xl font-bold">Dragon</h1>
  <p className="text-2xl font-bold">Sending humans and cargo into space</p>
</div>
   

      </div>
      <div className='flex justify-around text-white bg-black'>
<div>
    <h1 className='text-5xl font-bold text-center'>34</h1>
    <p className='text-2xl font-bold'>Total Launches</p>
</div>
<div>
    <h1 className='text-5xl font-bold text-center'>31</h1>
    <p className='text-2xl font-bold'>Visits to the ISS</p>
</div>
<div>
    <h1 className='text-5xl font-bold text-center'>17</h1>
    <p className='text-2xl font-bold'>Reflow Missions</p>
</div>
       </div>
      <Footer />
    </>
  )
}

export default Section3
