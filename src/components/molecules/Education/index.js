import React from "react";
import Lottie from "react-lottie";
import readingBook from "../../../assets/reading-book.json";

const Education = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: readingBook,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="pt-24">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          My <span className="text-violet-700">Qualification</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
  <div className="">
    <Lottie
      options={defaultOptions}
      height="70%"
      width="90%"
      className="mx-auto lg:mr-auto"
    />
  </div>
  <div className="mx-auto lg:ml-auto">
    {/* BTech */}
    <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg inline-block w-[500px] hover:shadow-primary duration-300 cursor-pointer">
      <div className="text-right mb-4">
        <h3 className="text-2xl font-semibold text-primary">
          BTech in Information Technology
        </h3>
        <p className="text-sm text-white font-semibold">2021 - 2025 (Batch)</p>
      </div>
      <ul className="text-base text-neutral text-justify list-disc pl-6">
        <li>Currently in 6th Semester</li>
        <li>University: Harcourt Butler Technical University</li>
        <li>CGPA: 9.02 (Till 6th Semester)</li>
      </ul>
    </div>

    <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg inline-block w-[500px] hover:shadow-primary duration-300 cursor-pointer mt-6">
      <div className="text-right mb-4">
        <h3 className="text-2xl font-semibold text-primary">Schooling</h3>
        <p className="text-sm text-white font-semibold">Class 12th</p>
      </div>
      <ul className="text-base text-neutral text-justify list-disc pl-6">
        <li>Completed Class 12th from Kendriya Vidyalaya Air Force Station Vadodara</li>
        <li>Subjects: Physics, Chemistry, Mathematics, Computer Science, English</li>
      </ul>
    </div>
    
  </div>
</div>

    </div>
  );
};

export default Education;
