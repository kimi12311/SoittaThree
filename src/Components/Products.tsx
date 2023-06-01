import { motion } from "framer-motion"
import { useEffect, useRef } from "react";
import WaveSurfer from 'wavesurfer.js'

const Products = () => {
    const AuroraRef = useRef(null);
    const NemesisRef = useRef(null);
    const PianoRef = useRef(null);
    const BotRef = useRef(null);
    let wsAurora: WaveSurfer;
    let wsNemesis: WaveSurfer;
    let wsPiano: WaveSurfer;
    let wsBot: WaveSurfer;

    useEffect(() => {
        if(AuroraRef.current){
            // eslint-disable-next-line react-hooks/exhaustive-deps
            wsAurora = WaveSurfer.create({
                container: AuroraRef.current,
                sampleRate: 44100,
                url: "/audio/AuroraDemo.mp3",
                height: 80,
            })
            console.log('i fire once');
        }
        if(NemesisRef.current){
            // eslint-disable-next-line react-hooks/exhaustive-deps
            wsNemesis = WaveSurfer.create({
                container: NemesisRef.current,
                sampleRate: 44100,
                url: "/audio/DemoTrack.wav",
                height: 80,
            })
        }
        if(PianoRef.current){
            // eslint-disable-next-line react-hooks/exhaustive-deps
            wsPiano = WaveSurfer.create({
                container: PianoRef.current,
                sampleRate: 44100,
                url: "/audio/Piano.mp3",
                height: 80,
            })
        }
        if(BotRef.current){
            // eslint-disable-next-line react-hooks/exhaustive-deps
            wsBot = WaveSurfer.create({
                container: BotRef.current,
                sampleRate: 44100,
                url: "/audio/Botanical.mp3",
                height: 80,
            })
        }
        return () => {
            wsAurora.stop();
            wsNemesis.stop();
            wsBot.stop();
            wsPiano.stop();
        };
    },[]);
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.4, ease:"easeInOut"}}
    >
    <div id="products" className='w-full py-[10rem] px-4'>
    <h1 className='text-center text-3xl font-normal mb-10'>Products</h1>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8'>
        <div className='w-full flex flex-col my-4'>
            <motion.img initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8, ease:"easeIn"}} src="Aurora.png" className='rounded-xl scale-[0.75] hover:scale-[0.76] ease-in-out transition-all duration-200 -z-10' loading="lazy"/>
            <h2 className='text-2xl font-normal text-center py-8'>Aurora - House Essentials</h2>
            <p className='text-center text-sm italic mb-2'>House, Deep House, Future Bounce</p>
            <div className='text-center font-medium'>
                <p className='py-2'>150+ Samples</p>
                <p className='py-2'>50+ Presets</p>
                <p className='py-2 font-light text-base'>Inspired by: Brooks, Avicii, Martin Garrix, Mesto</p>
            </div>
            <div ref={AuroraRef} onClick={() => wsAurora.playPause()} className="w-72 md:w-96 mx-auto"/>
            <div className='flex mx-auto space-x-6 mt-5'>
                <button className='bg-rose-700 hover:bg-rose-600 transition-all duration-150 ease-in-out w-32 h-8 rounded-lg' onClick={() => open("https://soittasoundworks.gumroad.com/l/AuroraHouseEssentials")}>Direct Link</button>
                <button className='bg-cyan-700 hover:bg-cyan-600 transition-all duration-150 ease-in-out w-32 h-8 rounded-lg' onClick={() => open("https://www.lootaudio.com/category/presets/Soitta-Soundworks/aurora-house-essentials-vol1")}>Loot Audio</button>

            </div>
        </div>
        <div className='w-full flex flex-col my-4'>
        <motion.img initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8, ease:"easeIn"}} src="Botanical.png" className='rounded-xl scale-[0.75] hover:scale-[0.76] ease-in-out transition-all duration-200 -z-10' loading="lazy"/>
            <h2 className='text-2xl font-normal text-center py-8'>Botanical - Future Bass</h2>
            <p className='text-center text-sm italic mb-2'>Future Bass, Melodic Dubstep</p>
            <div className='text-center font-medium'>
                <p className='py-2'>Serum Presets for Future Bass</p>
                <p className='py-2'>Requires Serum 1.3.5+</p>
                <p className='py-2 font-light text-base'>Inspired by: Illenium, Said the Sky</p>
            </div>
            <div ref={BotRef} onClick={() => wsBot.playPause()} className="w-72 md:w-96 mx-auto"/>
            <div className='flex mx-auto space-x-6 mt-5'>
                <button className='bg-rose-700 hover:bg-rose-600 transition-all duration-150 ease-in-out w-32 h-8 rounded-lg' onClick={() => open("https://soittasoundworks.gumroad.com/l/botanical")}>Direct Link</button>
            </div>
        </div>
        <div className='w-full flex flex-col my-4'>
        <motion.img initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8, ease:"easeIn"}} src="Nemesis2.png" className='rounded-xl scale-[0.75] hover:scale-[0.76] ease-in-out transition-all duration-200 -z-10' loading="lazy"/>
            <h2 className='text-2xl font-normal text-center py-8'>Nemesis Vol.1</h2>
            <p className='text-center text-sm italic mb-2'>Hybrid Trap, Dubstep</p>
            <div className='text-center font-medium'>
                <p className='py-2'>Samples for Heavy Bass Music</p>
                <p className='py-2'>Perfect for glitchy, experimental music</p>
                <p className='py-2 font-light text-base'>Inspired by: Eliminate, Excision</p>
            </div>
            <div ref={NemesisRef} onClick={() => wsNemesis.playPause()} className="w-72 md:w-96 mx-auto"/>
            <div className='flex mx-auto space-x-6 mt-5'>
                <button className='bg-rose-700 hover:bg-rose-600 transition-all duration-150 ease-in-out w-32 h-8 rounded-lg' onClick={() => open("https://soittasoundworks.gumroad.com/l/nemesisvol1")}>Direct Link</button>
            </div>
        </div>
        <div className='w-full flex flex-col my-4'>
        <motion.img initial={{opacity:0}} animate={{opacity:11}} transition={{duration:0.8, ease:"easeIn"}} src="Piano.png" className='rounded-xl scale-[0.75] hover:scale-[0.76] ease-in-out transition-all duration-200 -z-10' loading="lazy"/>
            <h2 className='text-2xl font-normal text-center py-8'>Interlude Piano</h2>
            <p className='text-center text-sm italic mb-2'>Any Genre</p>
            <div className='text-center font-medium'>
                <p className='py-2'>Beautiful, Emotional Pianos</p>
                <p className='py-2'>This will become your favorite piano plugin.</p>
                <p className='py-2 font-light text-base'>VST3, AU</p>
            </div>
            <div ref={PianoRef} onClick={() => wsPiano.playPause()} className="w-72 md:w-96 mx-auto"/>
            <div className='flex mx-auto space-x-6 mt-5'>
                <button className='bg-rose-700 hover:bg-rose-600 transition-all duration-150 ease-in-out w-32 h-8 rounded-lg' onClick={() => open("https://soittasoundworks.gumroad.com/l/InterludePiano")}>Direct Link</button>
                <button className='bg-cyan-800 hover:bg-cyan-600 transition-all duration-150 ease-in-out w-32 h-8 rounded-lg' onClick={() => open("https://www.lootaudio.com/category/plugins/Soitta-Soundworks/interlude-piano")}>Loot Audio</button>
            </div>
        </div>
      </div>
    </div>
    </motion.div>
  )
}

export default Products