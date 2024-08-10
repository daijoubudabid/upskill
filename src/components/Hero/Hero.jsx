import React from "react";

const Hero = () => {
  return (
    <div className="flex h-[450px] w-full content-normal items-center bg-hero bg-cover bg-center bg-no-repeat relative">
      <div className="w-full text-center z-[1]">
        <div>
          <h1 className="text-5xl font-bold text-white">
            Your Personal Assistant
          </h1>
          <h2 className="text-xl text-white">
            One-stop solution for your services. Order any service, anytime.
          </h2>
        </div>
        <div className="w-full xl:w-1/3 lg:w-1/2 md:2/3 mx-auto my-3 px-2">
          <input type="text" className="rounded-lg w-full p-3 focus:outline-none" placeholder="Find your service here e.g AC,Car,Facial"/>
        </div>
      </div>
      <div className="h-full w-full bg-black/55 absolute"></div>
    </div>
  );
};

export default Hero;
