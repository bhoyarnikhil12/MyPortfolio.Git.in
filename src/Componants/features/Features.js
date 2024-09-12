import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Business Stratagy"
          des="It is an organizational master plan. This plan is what the management of a company develops and implements to achieve their strategic goals."
         
        />
        <Card
          title="App Development"
          des="Creating software applications that run on a mobile device, and a typical mobile application utilizes a network connection to work with remote computing resources."
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimisation"
          des=" Finds ways to get more people to a website so that it may be better optimized for search engines and appear higher in search results.
"
          icon={<SiProgress />}
        />
        <Card
          title="Mobile Development"
          des=" It is the set of processes and procedures involved in writing software for small, wireless computing devices, such as smartphones."
          icon={<FaMobile />}
        />
        <Card
          title="Hosting Websites"
          des="It is stores and makes a website accessible on the internet. It allows users to store their website's files and applications on a server, which can be physical or virtual."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features