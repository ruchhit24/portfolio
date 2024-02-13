import React from "react";
import contact from "../assets/images/contact.jpg";
const Contact = () => {
  return (
    <div name='contact' className="w-full md:h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-72 md:pt-0">
      <div className="max-w-screen-lg h-full mx-auto flex justify-evenly pt-56 md:pt-28">
        <div>
          <div className="p-2">
            <p className="font-semibold text-4xl md:text-6xl">Contact Me</p>
            <p className="text-xl pt-6">
              Submit the below form to get in touch with me
            </p>
          </div>
          <div className="pt-6">
            <form action="https://getform.io/f/5b88e834-275d-48f2-adb0-fa60e3a5c8b3" method="POST" className="flex flex-col w-full py-2 my-2">
              <input
                className="p-2 m-2 my-2"
                type="text"
                placeholder="Enter your Name"
                name="name"
              />
              <input
                className="p-2 m-2 my-2"
                type="email"
                placeholder="Enter Your Email"
                name="email"
              />
              <textarea
                className="p-2 m-2 my-2 h-28 text-black"
                name="message"
                placeholder="Enter your Message"
              />
              <button className="w-1/2 mx-auto p-2 mt-6 bg-gradient-to-r from-cyan-500 to-blue-800 text-white cursor-pointer rounded-lg px-3 flex items-center justify-center text-lg">
                Let's Talk..
              </button>
            </form>
          </div>
        </div>
        <div className="pt-18 ml-24 hidden md:block">
            <img src={contact} alt="fg" width={400} height={400} className="rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
