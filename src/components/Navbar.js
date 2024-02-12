import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const Navbar = () => {
    const[toggle,setToggle] = useState(false);
  const list = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },

    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "contact",
    },
  ];
  return (
    <div className="w-full h-20 md:h-24 bg-black text-white fixed">
      <div className="flex justify-between w-full h-20">
        <h2 className="font-headingFont hidden md:block text-5xl md:text-6xl p-4 px-6 cursor-pointer">Ruchit Gule</h2>
        <ul className="hidden md:flex pt-6 gap-8 text-2xl pr-6">
          {list.map((compo) => (
            <li key={compo.id} className="cursor-pointer text-gray-400 hover:text-white hover:scale-105 duration-200 font-semibold">
              <Link to={compo.link} smooth duration={1000}>{compo.link}</Link>
            </li>
          ))}
        </ul>
        
        <div onClick={()=> setToggle(!toggle)} className="p-6 z-10 text-gray-300 cursor-pointer md:hidden">
            {toggle ? <FaTimes size={30}/> : <FaBars size={30}/> }
        </div>
        {
            toggle && (
                <ul className="w-full h-screen bg-gradient-to-b from-black to-gray-500 flex flex-col justify-center items-center absolute top-0 left-0">
                    {list.map((compo)=>(
                        <li key={compo.id} className="cursor-pointer text-gray-400 hover:text-white hover:scale-105 duration-200 py-4 text-2xl">
              {compo.link}
            </li>     
                    ))}
                </ul>
            )
        }
      </div>
    </div>
  );
};

export default Navbar;
