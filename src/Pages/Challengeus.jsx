import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import "animate.css";
import tiktok_icon from "../assets/images/tiktok_icon.svg";
import HeroSection from "../components/HeroSection/HeroSection";
import CompanySection from "../components/CompanySection/CompanySection";
import ExamplesSection from "../components/ExamplesSection/ExamplesSection";
import FormSection from "../components/FormSection/FormSection";
import ImprintSection from "../components/ImprintSection/ImprintSection";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";


const Challengeus = () => {
  return (
    <main className='overflow-hidden'>
      {/* Hero section  */}
      <HeroSection />

      {/* company section */}
      <CompanySection />

      {/* examples section */}
      <ExamplesSection />

      {/* Form Section */}
      <FormSection />

      <div className='lg:mt-40 md:mt-32 sm:mt-20 mt-16 mb-20 flex flex-col md:flex-row justify-center items-center lg:gap-10 md:8 sm:gap-5 gap-2'>
        <div className='' data-aos='fade-right' data-aos-duration='500'>
          <p className='lg:text-xl md:text-lg sm:text-base text-xs font-semibold'>Imprint & Privacy Policy</p>
        </div>
        <span
          className='text-5xl'
          data-aos='zoom-in-up'
          data-aos-duration='500'>
          ||
        </span>
        <div
          className='flex items-center gap-3'
          data-aos='fade-left'
          data-aos-duration='500'>
          <img src={tiktok_icon} alt='' className="lg:w-full sm:w-16 w-10" />
          <p className='lg:text-xl md:text-lg sm:text-base text-xs font-semibold'>u.challenge.us</p>
        </div>
      </div>

      {/* Imprint Section */}
      <ImprintSection />

      {/* Privacy policy */}
      <PrivacyPolicy />

      {/*  */}
    </main>
  );
};

export default Challengeus;
