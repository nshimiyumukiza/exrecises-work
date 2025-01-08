import Head from "../Head"
import Footer from "../Footer"

const Section2 = () => {
  return (
    <>
           <div className='h-screen w-full bg-[url("src/images/gaga.png")] bg-cover text-white'>
       <Head />
       <div className="h-screen flex flex-col justify-center items-center">
  <h1 className="text-4xl font-bold">Falcon Heavy</h1>
  <p className="text-2xl font-bold">The world's most powerful rocket</p>
</div>
   

      </div>
      <div className='flex justify-around text-white bg-black'>
<div>
    <h1 className='text-5xl font-bold text-center'>3</h1>
    <p className='text-2xl font-bold'>Total Launches</p>
</div>
<div>
    <h1 className='text-5xl font-bold text-center'>7</h1>
    <p className='text-2xl font-bold'>Total Landings</p>
</div>
<div>
    <h1 className='text-5xl font-bold text-center'>4</h1>
    <p className='text-2xl font-bold'>Total Reflights</p>
</div>
       </div>
      <Footer />
    </>
  )
}

export default Section2

