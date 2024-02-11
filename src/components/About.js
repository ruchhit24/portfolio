import React from "react";
import about from "../assets/images/about.jpg"
const About = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-500 via-gray-800 to-black text-white">
      <div className=" max-w-screen-lg h-full mx-auto flex ">
        <div>
          <h2 className="text-6xl font-semibold pb-6">About Me</h2>
          <p className="text-xl w-3/4">
            It’s now been 3 years since I started programming. I have worked for
            three start-ups in Korea and have developed a few projects as a
            freelancer. I am moving to Shanghai in a few weeks. I love software
            development and recommend this field to all of my friends who are
            interested in finding other opportunities in their life.
          </p>
          <br />
          <p className="text-xl w-3/4">
            I will share my experiences in Shanghai. I also want to write how I
            became a full-stack developer in a relatively short period of time
            by myself, as well as explain my technical interest in software
            development.
          </p>
        </div>
        <div>
          <img src={about} alt="about photo" width={1200} height={800} className="rounded-xl pt-4"/>
        </div>
      </div>
    </div>
  );
};

export default About;
