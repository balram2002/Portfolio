import React from "react";

import { Button } from "./ui/moving-border2";

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer",
    desc: "Assisted in the development of a web-based platform using React.js, Next.js enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Developer",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Full Stack Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies and Backend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

const Services = () => {
  return (
    <div className="py-8 pb-2 w-full">
      <h1 className="heading flex items-center justify-center text-center w-full text-dark dark:text-light font-medium text-5xl">
        My Services
      </h1>

      <div className="w-full mt-8 grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className="flex-1 p-2 !text-dark dark:!text-light font-medium border-neutral-200 dark:border-slate-800"
          >
            <div className="flex flex-row items-center justify-center p-3 py-6 md:p-5 lg:p-10 gap-5 !text-dark dark:!text-light">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5 !text-dark dark:!text-light">
                <h1 className="text-start !text-light dark:!text-light text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-light/75 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Services;
