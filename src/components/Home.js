import React from "react";
import profile from "../assets/images/avatar.jpg"
import { FaArrowRight } from "react-icons/fa6";
const Home = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-500">
      <div className="max-w-screen-lg h-full mx-auto p-4 pt-6 flex">
        <div className="w-3/5 p-2 m-2">
          <div className="text-white text-4xl md:text-6xl font-semibold py-4">I am a Full Stack Developer</div>
          <p className="w-3/4 text-gray-300 hidden md:block">I am a full-stack developer in Korea who has worked for three starts-ups here. My interests range from back-side, front-end, system management to mobile applications. As you can see, I am interested in all parts of application development.</p>
          <button className="group p-2 mt-4 bg-gradient-to-r from-cyan-500 to-blue-800 text-white cursor-pointer rounded-lg px-6 flex items-center text-lg">
           Portfolio 
          <span className="ml-2 text-gray-300 group-hover:rotate-90 duration-300"><FaArrowRight /></span>
          </button>
        </div>
        <div>
        <img src={profile} alt="profile image" width={400} height={400}
            className="rounded-full md:rounded-lg"
        />
        </div>
      </div>
    </div>
  );
};

export default Home;
