import React from "react";
import unicorn from "../Images/unicorn1.svg";

export default function Unicorn() {
  return (
    <div className="lg:w-[1100px] w-4/5 float-right bg-[#3f4aaf] lg:min-h-[368px] md:h-[200px] h-[150px] mt-24 rounded-l-[368px] flex overflow-hidden">
      <img src={unicorn} />
      <div className="place-self-center p-8">
        <p className="sub-heading">
          When things do not go as expected, <br />
          we are happy to help and fix them for you! <br />
        </p>
        <p className="text-sm md:text-md lg:text-xl text-white font-bold mt-3 lg:mt-12">
          here is how we help
        </p>
      </div>
    </div>
  );
}
