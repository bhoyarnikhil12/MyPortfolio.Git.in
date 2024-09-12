import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2008 - 2018</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachlor of Engineering"
            subTitle="Nagpur University (2010 - 2018)"
            result="57%"
            des="The training provided by universities in order to prepare people to work in various sectors of the company."
          />
          <ResumeCard
            title=" Higher Secondary School Education"
            subTitle="LBHK college (2009 - 2010)"
            result="53%"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Lakhotiya Bhutada School (2007 - 2008)"
            result="68%"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Back Office Executive"
            subTitle="MD India Health insurance tpa pvt Ltd - (Feb2021-Oct2021)"
            Feb2021-Oct2021
            result="Pune "
            des="MD India hiring process is an important part of insurance. MD India care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Back office Executive "
            subTitle="Exl service pvt Ltd - (Dec2022 - Nov2023)"
            result="Pune"
            des="Exl hiring process is an important part of Utilities Process. Exl care deeply about their teams and the people who make them up.."
          />
          <ResumeCard
            title="Full Stack Web Development Certification Course"
            subTitle="Felix IT System- (July2023 - July2024)"
            result="Pune"
            des=" It is a Certification course where i learn Frontend and Backend development."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;