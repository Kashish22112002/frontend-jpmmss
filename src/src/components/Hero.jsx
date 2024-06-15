import React from "react";
import projectDetails from "../constant";
import heroImg from "../assets/landing.jpeg";
import logo from "../assets/logo.png";
import styles from './hero.module.css';

const Hero = () => {
  return (
    <section className="bg-orange-50 text-green-800 mx-auto">
      <div className="md:flex justify-around p-6 md:p-2">
        <div className="w-1/2">
          <img
            src={heroImg}
            alt=""
            className="md:w-[550px] w-48 rounded-md my-4 mx-auto hidden md:block"
          />
        </div>
        <div className="text-center flex flex-col items-center justify-center md:w-1/2">
          <img src={logo} alt="" className="w-24 md:w-48" />
          <p className={`mt-4 text-xl md:text-3xl font-bold ${styles["playwrite-is-cursive"]}`}>{projectDetails.DESC}</p>
          <button className="mt-8 px-6 py-2 text-xl text-orange-50 bg-green-800 border border- font-semibold rounded-xl">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
