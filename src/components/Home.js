import React from "react";
import profile from "../assets/images/avatar.jpg"
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div name='home' className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-500">
      <div className="max-w-screen-lg h-full mx-auto p-4 pt-44 flex">
        <div className="w-3/5 p-2 m-2">
          <div className="text-white text-4xl md:text-6xl font-semibold md:py-4">I am a Full Stack Developer</div>
          <p className="w-3/4 text-gray-300 hidden md:block">A passionate Full Stack Developer based in
Indore, Madhya Pradesh. My interests range from back-side, front-end, system management to mobile applications. As you can see, I am interested in all parts of application development.</p>
          <Link to="portfolio" smooth duration={1000} className="group p-2 mt-6 bg-gradient-to-r from-cyan-500 to-blue-800 text-white cursor-pointer rounded-lg w-[35%] text-lg flex items-center justify-center">
           Portfolio 
          <span className="ml-2 text-gray-300 group-hover:rotate-90 duration-300"><FaArrowRight /></span>
          </Link>
        </div>
        <div className="mt-4">
        <img src={profile} alt="jj" width={400} height={400}
            className="rounded-full"
        />
        </div>
      </div>
    </div>
  );
};

export default Home;
