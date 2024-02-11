import React from "react";

const Technology = () => {
  const technologies = [
    {
      id: 1,
      src: "https://seeklogo.com/images/H/html5-logo-EF92D240D7-seeklogo.com.png",
      title: "HTML",
    },
    {
      id: 2,
      src: "https://seeklogo.com/images/C/css-3-logo-023C1A7171-seeklogo.com.png",
      title: "CSS",
    },
    {
      id: 3,
      src: "https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png",
      title: "Javascript",
    },
    {
      id: 4,
      src: "https://vectorwiki.com/images/1jXTN__react.svg",
      title: "React",
    },
    {
      id: 5,
      src: "https://vectorwiki.com/images/IcYvE__tailwind-css.svg",
      title: "Tailwind CSS",
    },
    {
      id: 6,
      src: "https://vectorwiki.com/images/RHM7l__redux.svg",
      title: "Redux",
    },
  ];
  return (
    <div className="w-full h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-screen-lg h-sreen mx-auto">
        <div>
          <p className="text-6xl font-semibold">Technology Known</p>
          <p className="text-xl pt-4">
            These are the Technologies I have Worked With.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10 mt-10">
          {technologies.map(({ id, src, title }) => (
            <div key={id} className="flex flex-col justify-center items-center">
              <img
                src={src}
                alt="phonto"
                width={100}
                height={100}
                className="mx-auto cursor-pointer hover:scale-125 duration-500"
              />
              <p className="text-center text-lg font-medium pt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technology;
