import React from 'react'
import Typed from 'react-typed'

const splashText = [
    " Let's Rock!",
    " Let's Tweak Some Patches!",
    " Let's FM A from B!",
    " Let's Sync Some Oscillators!",
    " Let's Make A Sad Piano Melody!",
    " Never Gonna",
    " Give You Up",
]
const handleScroll = (elem : string) => {
  const home = document.getElementById(elem);
  home && home.scrollIntoView({behavior:"smooth", block:"start"});
}

const Hero = () => {
  return (
    <div id="home">
        <div className='max-w-[800px] mt-[-96px] w-full h-screen flex mx-auto text-center flex-col justify-center'>
            <p className='font-semibold p-2 text-gray-200 italic text-[16px]  '>The New Soitta Soundworks</p>
            <h1 className='md:text-7xl sm:text-6xl text-5xl md:py-4'>A New Era</h1>
            <div className='flex justify-center items-center pt-2'>
                <Typed strings={splashText} typeSpeed={120} backSpeed={140} loop className='md:text-3xl sm:text-2xl text-xl pl-2'/>
            </div>
        <button onClick={() => handleScroll("products")} className='text-neutral-100 bg-cyan-800 w-[200px] rounded-md font-medium my-12 mx-auto px-6 py-2 hover:bg-cyan-700 transition-all hover:rounded-lg'>Begin</button>
        </div>
    </div>
  )
}

export default Hero