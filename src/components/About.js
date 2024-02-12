import React from "react";
import about from "../assets/images/about.jpg";
const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-500 via-gray-800 to-black text-white pt-36"
    >
      <div className=" max-w-screen-lg h-full mx-auto flex justify-evenly ">
        <div className="w-[50%]">
          <h2 className="text-6xl font-semibold pb-6">About Me</h2>
          <p className="text-xl  text-gray-300">
            As a Full Stack Developer, I possess an impressive arsenal of skills
            in React.js,Redux Tailwind CSS, JavaScript, Node.js, Express.js,
            Firebase, HTML, CSS, Styled Component and Material UI. I have
            developed multiple projects which helped me to enhance my skills.
            Yes, having your strong base really helps and hence I am open to
            adapting to whichever framework is required. I believe Project Based
            Learning is the best approach to learn anything. Hence, I've got
            projects in all the different technologies that I've learned over
            time.
          </p>
          <br />
          <p className="text-xl text-gray-300">
            By the way, when I'm not coding, you'll find me reading non-fiction,
            or watching UFC, or playing chess :)
          </p>
        </div>
        <div>
          <img
            src={about}
            alt="about photo"
            width={250}
            height={250}
            className="rounded-2xl pt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
