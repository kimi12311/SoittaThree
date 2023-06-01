import { motion } from "framer-motion";

const Aurora = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="max-w-[800px] mt-8 w-full h-screen flex mx-auto text-center flex-col justify-center">
        <p className="font-semibold p-2 text-gray-200 italic text-[16px]  ">
          Your new favorite house sample pack
        </p>
        <h1 className="md:text-6xl sm:text-5xl text-4xl md:py-4">Aurora House Essentials Vol.1</h1>
        <div className="flex justify-center items-center pt-2">
        </div>
        <img src="/Aurora.png" className="w-[400px] mx-auto h-auto p-5"/>
        <button
          className="text-neutral-100 bg-cyan-800 w-[200px] rounded-md font-medium my-12 mx-auto px-6 py-2 hover:bg-cyan-700 transition-all hover:rounded-lg"
        >
          Buy Now
        </button>
      </div>
    </motion.div>
  );
};

export default Aurora;
