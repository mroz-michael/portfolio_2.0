"use client"; //tells next.js that this component runs on browser, needed for framer-motion

import { motion } from "framer-motion";
import { FiRefreshCcw } from "react-icons/fi";
import { useState } from "react";

export default function HomePage() {
  const titleText = "Hi, I'm Michael :)";
  const subText = "Student | Aspiring Developer";
  const [reRender, setReRender] = useState(0);
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

     <section className="mt-10 flex flex-col md:flex-row md:gap-4">
        <a
          href="/projects"
          className="mt-6 px-6 py-3 text-lg font-semibold text-gray-900 bg-green-400 rounded-lg hover:bg-green-500 transition"
        >
          View My Projects
        </a>
        <a
          href="/about"
          className="mt-6 px-6 py-3 text-lg font-semibold text-gray-900 bg-green-400 rounded-lg hover:bg-green-500 transition"
        >
          A Bit About Me
        </a>
      </section>
        <footer>

        </footer>
      </main>
  );
}
