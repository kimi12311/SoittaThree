import { useNavigate } from "react-router-dom";

const description = "We're all about making your music making easier, through samples and plugins. We strive to make your creativity shine through with minimal resistance, that's what we're about. So let's make some music!";
const About = () => {
  const navigate = useNavigate();
  const routeChange = (pathString: string) => {
    navigate(pathString);
  };
  
  return (
    <div className='w-full bg-[#0d0f0f79] py-16 px-4' id="about">
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 text-center md:text-left'>
            <img src="Ellipse 1.png" className='mx-auto w-[100px] md:w-[200px] h-auto my-4'/>
            <div className='flex flex-col justify-center '>
                <p className='text-neutral-100 first-letter:text-xl'>What we're about_</p>
                <h1 className='text-3xl font-bold m-4 ml-0'>Innovation Through Sound</h1>
                <p className='text-lg font-light'>
                    {description}
                </p>
                <button onClick={() => routeChange("/products")} className='text-neutral-100 bg-cyan-800 w-[200px] rounded-md font-medium my-12 md:mx-0 mx-auto px-6 py-2 hover:bg-cyan-700 transition-all hover:rounded-lg'>Let's Get Going</button>
            </div>
        </div>
    </div>
  )
}

export default About