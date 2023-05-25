
function App() {

  return (
    <>
      <div className=''>
        <div className='text-center'>
          <a target="_blank" className='flex items-center justify-center'>
            <img src="/soitta.svg" className="logo scale-[3] mb-16" alt="Vite logo" />
          </a>
          <h2 className='text-3xl mb-12 font-semibold'>The Beginning of a New Era</h2>
        </div>
        <p className='pb-6 font-light'>
          For now, here are the links:
        </p>
        <a href='https://soittasoundworks.gumroad.com/l/nemesisvol1' className='text-white hover:text-red-300 transition-all duration-150 ease-in-out' target="_blank">Nemesis Vol.1</a>
        <br/>
        <br/>
        <a href='https://soittasoundworks.gumroad.com/l/botanical' className='text-white hover:text-amber-200 transition-all duration-150 ease-in-out' target="_blank">Botanical for Xfer Serum</a>
        <br/>
        <br/>
        <a href='https://soittasoundworks.gumroad.com/l/InterludePiano' className='text-white hover:text-blue-200 transition-all duration-150 ease-in-out' target="_blank">Interlude Piano</a>
        <br/>
        <br/>
        <a href='https://soittasoundworks.gumroad.com/l/AuroraHouseEssentials' className='text-white hover:text-purple-300 transition-all duration-150 ease-in-out' target="_blank">Aurora House Essentials</a>
      </div>
    </>
  )
}

export default App
