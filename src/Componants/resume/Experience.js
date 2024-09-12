import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Back office Executive"
            subTitle="MD India Health insurance pvt Ltd - (Feb2021-Oct02021)"
            result="Pune"
            des="MD India hiring process is an important part of our insurance. MD India care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Back office Executive"
            subTitle="Exl service pvt Ltd - (Dec2022 - Nov2023)"
            result="Pune"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Pune isn't easy."
          />
          <ResumeCard
            title="Full Stack Web Development Course"
            subTitle="Felix IT  System- (july2023- july2024)"
            result="Pune"
            des="It is a Certification course where i learn Frontend and Backend development."
            />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;