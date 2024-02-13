import React from "react";
import about from "../assets/images/about.jpg";
const About = () => {
  return (
    <div
      name="about"
      className="w-full md:h-screen bg-gradient-to-b from-gray-500 via-gray-800 to-black text-white pt-20 md:pt-36"
    >
      <div className=" max-w-screen-lg h-full mx-auto flex justify-evenly ">
        <div className="w-[50%] ml-2">
          <h2 className="text-3xl md:text-6xl font-semibold pb-6">About Me</h2>
           
          <p className="text-lg md:text-xl text-gray-300">
            As a Full Stack Developer, I possess an impressive arsenal of skills
            in React.js,Redux Tailwind CSS, JavaScript, Node.js, Express.js,
            Firebase, HTML, CSS, Styled Component and Material UI.
          </p>
          <p className="hidden md:block text-lg text-gray-300">
          I have
            developed multiple projects which helped me to enhance my skills .Yes,having your strong base really helps and hence I am open to
            adapting to whichever framework is required. I believe Project Based
            Learning is the best approach to learn anything. Hence, I've got
            projects in all the different technologies that I've learned over
            time.
          </p>
          <br />
          <p className="text-xl text-gray-300 hidden md:block">
            By the way, when I'm not coding, you'll find me reading non-fiction,
            or watching UFC, or playing chess :)
          </p>
        </div>
        <div className="w-[35%]">
          <img
            src={about}
            alt="about"
            // width={350}
            // height={350}
            className="rounded-lg pt-16 md:pt-4 w-40 md:w-60 h-100 md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
