"use client"; //tells next.js that this component runs on browser, needed for framer-motion

import { motion } from "framer-motion";
import { FiRefreshCcw } from "react-icons/fi";
import { useState } from "react";
import WeatherInfo from "./components/WeatherInfo";
{/* wait a bit for api key to be activated before integrating <WeatherInfo city={"Dartmouth"}/> */}
import ButtonGroup from "./components/ButtonGroup";
import SocialLinks from "./components/SocialLinks";
export default function HomePage() {
  const titleText = "Hi, I'm Michael :)";
  const subText = "Student | Aspiring Developer";
  /*to force rerender and play animation again on click*/
  const [reRender, setReRender] = useState(0);
  /*for ButtonGroup component*/
  const buttons = [
    { href: "/projects", label: "View My Projects" },
    { href: "/about", label: "A Bit About Me" },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center">

      <h1 className="text-3xl font-bold md:text-6xl">
        {titleText.split("").map( (char, i) => (
          <motion.span
            key={`${reRender} - ${i}`}
            className="text-white"
            initial={{ color: "#ffffff"}}
            animate={{ color: ["#ffffff", "#4ade80", "#ffffff"]}}
            transition={ {
              delay: i * 0.1,
              duration: .2,
              ease: "easeInOut",
            }}

          >
            {char}
          </motion.span>
        ))}
      </h1>
      
      <div className="relative flex items-center group">
        <p className="mt-4 text-lg text-gray-300">
          {subText.split("").map( (char, i) => (
            <motion.span
              key={`${reRender} - ${i}`}
              className="text-white"
              initial={{ color: "#ffffff"}}
              animate={{ color: ["#ffffff", "#4ade80", "#ffffff"]}}
              transition={ {
                delay: (titleText.length * .1) + i * 0.1, //start it after titleText is done
                duration: .2,
                ease: "easeInOut",
              }}

            >
              {char}
            </motion.span>
          ))}
        </p>
        <button 
          onClick={() => setReRender(prev => prev + 1)}  
          className="ml-2 p-2 mt-3.5 text-green-500 hover:text-green-500 transition"
          aria-label="Replay animation"
        >
            <FiRefreshCcw size={15} />
          </button>
          <span className="absolute left-[100%] bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                Replay animation
          </span>
        </div>
        <ButtonGroup buttons={buttons}/>
        <SocialLinks />
      </main>
  );
}
