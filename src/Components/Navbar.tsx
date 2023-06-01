import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleScroll = (elem : string) => {
    const home = document.getElementById(elem);
    home && home.scrollIntoView({behavior:"smooth", block:"start"});
  }

  const handleNav = () => {
    setOpen(prev => !prev);
  }
  const handleNavAndScroll = (elem : string) => {
    setOpen(prev => !prev);
    const home = document.getElementById(elem);
    home && home.scrollIntoView({behavior:"smooth", block:"start"});
  }
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className={open ? "opacity-0 text-5xl transition-all ease-in-out duration-150" : "text-5xl w-full font-semibold transition-all flex ease-in-out duration-500"}>SOITTA</h1>
      <ul className="hidden md:flex md:uppercase">
        <li className="p-4"><Link to="/" onClick={() => handleScroll("home")} className="hover:text-sky-100 transition-all">Home</Link></li>
        <li className="p-4"><Link to="/" onClick={() => handleScroll("products")}  className="hover:text-sky-100 transition-all">Products</Link></li>
        <li className="p-4"><Link to="/" onClick={() => handleScroll("about")} className="hover:text-sky-100 transition-all">About</Link></li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!open ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20}/>}
      </div>
      <div className={open ? "fixed left-0 top-0 w-[60%] h-full bg-[#070707] ease-in-out duration-300 transition-all" : "fixed left-[-75%]"}>
        <h1 className="text-5xl w-full font-semibold m-6">MENU</h1>
        <ul className="pt-12 uppercase p-2">
          <li className="p-4 border-b border-b-gray-700"><Link to="/" onClick={() => handleNavAndScroll("home")}>Home</Link></li>
          <li className="p-4 border-b border-b-gray-700"><Link to="/" onClick={() => handleNavAndScroll("products")}>Products</Link></li>
          <li className="p-4 border-b border-b-gray-700"><Link to="/" onClick={() => handleNavAndScroll("about")}>About</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
