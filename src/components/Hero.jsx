import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { TicofabCanvas } from "./canvas";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import {
  BsTwitter,
  BsGithub,
  BsDiscord,
  BsInstagram,
  BsLinkedin,
  BsFacebook,
} from "react-icons/bs";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "<CoderWithAPassion />",
      "TechInnovator & ProblemSolver",
      "FitnessEnthusiast",
      "GamingConnoisseur",
      "EternalLearner & TechExplorer",
      "CraftingElegantSolutions",
      "InCodeWeTrust",
      "PushingPixelsAndDeadlifts",
      "FromJavaScriptToJavaSips",
      "BuildingTheWebOneLineAtATime",
      "UnitingTechAndWellness",
    ],
    loop: true,
    delaySpeed: 1000,
  });

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500"></div>
          <div className="w-1 sm:h-80 h-40 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500"></div>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{":- "}
            <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
               Utsab<span className="hidden sm:inline"> Bhattacharyya</span>
            </span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 sm:-mb-10 text-white-100 max-w-lg`}>
          BCA 1st year at Techno International Newtown, is a skilled Full Stack and Web Developer and UI/UX designer. Winner of the "Best Innovative Design" award, he has completed 15+ freelance projects and contributed to open-source UI libraries, showcasing creativity and technical excellence.            <Cursor cursorColor="#915eff" />
          </p>
        </div>
      </div>
      <TicofabCanvas />


      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

      <div className="absolute right-5 top-1/2 -translate-y-1/2 flex flex-col gap-5 items-center md:mt-10 mt-5 md:gap-12">
        <Link target="_blank" to="https://www.linkedin.com/in/utsab-bhattacharyya-66aa58311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <BsLinkedin
            size={30}
            className="icon hover:text-[#0e76a8] hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100"
          />
        </Link>

        <Link target="_blank" to="https://github.com/conceptqubit/Gesture.git">
          <BsGithub
            size={30}
            className="icon hover:text-[#494646] hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100"
          />
        </Link>

        <Link target="_blank" to="https://twitter.com/utsabbhattacharyya">
          <BsTwitter
            size={30}
            className="icon hover:text-[#1DA1F2] hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100"
          />
        </Link>

        <Link target="_blank" to="https://discord.gg/tvCFqmCJ">
          <BsDiscord
            size={30}
            className="icon hover:text-[#5865F2] hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100"
          />
        </Link>

        <Link target="_blank" to="https://www.instagram.com/uts_x_krixz/">
          <BsInstagram
            size={30}
            className="icon hover:text-[#E1306C] hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100"
          />
        </Link>
        <Link target="_blank" to="https://www.facebook.com/utsab_bhattacharyya/">
          <BsFacebook
            size={30}
            className="icon hover:text-[#1877F2] hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100"
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
