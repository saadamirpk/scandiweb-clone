import React from "react";
import diamond from "../Images/diamond1.png";

export default function Hero() {
  return (
    <section className="grey-back h-screen hero flex justify-center items-center">
      <div className="container">
        <h1 className="heading ">
          <span className="grey">scandiweb is the only eCommerce agency, </span>
          <span className="black">which is happy to be your Plan B</span>
        </h1>
        <div className="relative">
          <img
            className="absolute right-0 top-[-60px]"
            src={diamond}
            alt="Icon"
          />
        </div>
      </div>
    </section>
  );
}
