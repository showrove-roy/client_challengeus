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

      <div className='mt-40 mb-20 flex justify-center items-center gap-10'>
        <div className='' data-aos='fade-right' data-aos-duration='500'>
          <p className='text-3xl font-semibold'>Imprint & Privacy Policy</p>
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
          <img src={tiktok_icon} alt='' />
          <p className='text-3xl font-semibold'>u.challenge.us</p>
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
