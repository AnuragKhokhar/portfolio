import React from "react";
import TypeAnimation from "react-type-animation";
import { motion } from "framer-motion";
import "./About.css";
import "../../components/atoms/PrimaryBtn/PrimaryBtn.css";
import "../shared/Shared.css";
import { BottomLine, MySkill, Education } from "../../components";
import { FaDownload } from "react-icons/fa";


const About = () => {
  return (
    <div className="parent pt-16 my-16">
      <div className="">
        <motion.div
          className="mb-10"
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, type: "spring" },
          }}
        >
          <h3 className="text-neutral text-center">Something About Myself</h3>
          <h1 className="text-4xl font-semibold drop-shadow-md text-center">
            About <span className="text-violet-700">Me</span>
          </h1>
          <BottomLine />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <img
              src="/images/my.png"
              alt="Anurag"
              className="p-12 w-70 h-70 transform translate-y-[-12%]"
              title="Anurag"
            />

          </motion.div>
          <motion.div
            className=""
            initial={{ x: 200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <h1 className="text-4xl font-semibold mb-4 text-center translate-y-[-380%] sm:translate-y-[-0%] sm:text-3xl sm:mb-2 md:text-left">Anurag Khokhar</h1>
            <div className="my-8">
              <TypeAnimation
                className="text-2xl text-primary font-bold text-center translate-y-[-500%] sm:translate-y-[-0%]  sm:text-2xl sm:mb-2 md:text-left"
                cursor={true}
                sequence={[
                  "A Mern-stack Developer",
                  2000,
                  "A Full-stack Developer",
                  2000,
                  "A .NET Developer",
                  2000
                ]}
                wrapper="div"
                repeat={Infinity}
              />
            </div>
            <p className="text-neutral font-medium text-center translate-y-[-100%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
            As a MERN stack developer, I am dedicated to crafting top-notch web applications tailored to my clients' requirements. With extensive experience in full-stack web development, I excel in leveraging React.js for dynamic front-end interfaces, MongoDB for flexible database management, Express.js for efficient server-side operations, and Node.js for seamless backend functionality. My focus lies in delivering scalable and resilient web solutions that exceed client expectations, ensuring optimal performance and user satisfaction.
              
            </p>
            <br />
            <p className="text-neutral font-medium text-center translate-y-[-150%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
              My passion for solving complex problems and creating innovative
              solutions drives me to stay up-to-date with the latest
              technologies and trends in the industry.
            
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 mt-4 text-center translate-y-[-50%] sm:translate-y-[-0%] sm:mb-2 md:text-left ">
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Name : </span>Anurag Khokhar
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Phone : </span>+91 981 8126 029
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Email : </span> anuragkhokhar635@gmail.com
              </h2>
              <h2 className="font-medium">
                <span className="mr-1 text-primary">Address : </span>Delhi, India
              </h2>
              <a
                href="https://drive.google.com/file/d/1jZPWrWzCy93wU8EYS2O8GC1pIYsI-BFF/view?usp=sharing"
                target="blank"
              >
                <div className="flex justify-center md:justify-start translate-y-[60%] sm:translate-y-[-0%]">
                  <button className="primary-button">
                    <span>My Resume</span>
                    <span>
                      <FaDownload />
                    </span>
                  </button>
                </div>

              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* My Skill */}
      <MySkill />

      {/* Education */}
      <Education />

      <div className="my-8">
      <h1 className="text-4xl font-semibold drop-shadow-md text-center mb-8">
        My <span className="text-violet-700">Achievement</span>
      </h1>
      <p className="text-gray-300 font-bold text-center sm:text-left mb-5">
    Being selected by the Service Selection Board (SSB) for the role of Technical Officer in the Indian Navy is a prestigious achievement that reflects exceptional qualities and capabilities. Here's an elaboration of the achievement:
  </p>
  <ul className="list-disc list-inside text-neutral font-medium text-center sm:text-left">
    <li><span className="text-white">Service Selection Board (SSB)</span>: The SSB is responsible for selecting candidates for officer positions in the Indian Armed Forces, including the Navy. The selection process is rigorous and comprehensive, designed to assess candidates' suitability for leadership roles.</li>
    <li><span className="text-white">Role of Technical Officer</span>: The position of Technical Officer in the Indian Navy involves responsibilities related to technical operations, maintenance, and management of naval equipment, systems, and infrastructure. It requires specialized knowledge, skills, and qualifications in technical fields.</li>
    <li><span className="text-white">Top 30 out of 600,000 applicants</span>: Being ranked among the top 30 out of 600,000 applicants is a remarkable achievement that demonstrates outstanding performance and competitiveness. It signifies excellence and distinguishes the individual from a vast pool of candidates.</li>
    <li><span className="text-white">Exceptional leadership</span>: Leadership qualities are crucial for officer positions in the military. Being selected for the role of Technical Officer implies that the individual possesses strong leadership abilities, including decision-making, problem-solving, and strategic thinking.</li>
    <li><span className="text-white">Communication skills</span>: Effective communication is essential for conveying information, instructions, and ideas clearly and accurately. The achievement suggests that the individual excels in communication, both verbal and written, which is vital for collaboration, coordination, and teamwork.</li>
    <li><span className="text-white">Adaptability</span>: Adaptability refers to the ability to adjust to new situations, environments, and challenges. In the context of the military, adaptability is critical for handling dynamic and unpredictable scenarios. Being selected by the SSB indicates that the individual is adaptable and capable of thriving in diverse and demanding conditions.</li>
  </ul>
      </div>
    </div>
  );
};

export default About;
