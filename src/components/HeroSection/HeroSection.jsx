import React from "react";

const HeroSection = () => {
  return (
    <section
      data-aos='zoom-in'
      data-aos-easing='linear'
      data-aos-duration='1000'
      className='heroBg h-screen flex justify-center items-center overflow-hidden'>
      <h1
        className='text-white text-7xl font-extrabold uppercase tracking-widest	text-center'
        data-aos='zoom-in-up'
        data-aos-duration='1500'>
        Dare to
        <br />
        explore
      </h1>
    </section>
  );
};

export default HeroSection;
