import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Test Pass."
            subTitle="Sololearn certificate in HTML."
            result="Success"
            des="It has helped me a lot and is a core of every web page."
          />
          <ResumeCard
            title="Test Pass."
            subTitle="Sololearn certificate in CSS."
            result="Success"
            des="It has helped me a lot and is a core of every web page"
          />
          <ResumeCard
            title="Test Pass."
            subTitle="Sololearn certificate in Javascript."
            result="Success"
            des="Sololearn certificate in Js."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;