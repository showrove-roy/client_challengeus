import React from "react";
import tiktok_icon from "../assets/images/tiktok_icon.svg";
import HeroSection from "../components/HeroSection/HeroSection";
import CompanySection from "../components/CompanySection/CompanySection";
import ExamplesSection from "../components/ExamplesSection/ExamplesSection";
import FormSection from "../components/FormSection/FormSection";
import ImprintSection from "../components/ImprintSection/ImprintSection";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";

const Challengeus = () => {
  return (
    <main>
      {/* Hero section  */}
      <HeroSection />

      {/* company section */}
      <CompanySection />

      {/* examples section */}
      <ExamplesSection />

      {/* Form Section */}
      <FormSection />

      <div className='mt-40 mb-20 flex justify-center items-center gap-10'>
        <div className=''>
          <p className="text-3xl font-semibold">Imprint & Privacy Policy</p>
        </div>
        <span className="text-5xl">||</span>
        <div className='flex items-center gap-3'>
          <img src={tiktok_icon} alt='' />
          <p className="text-3xl font-semibold">u.challenge.us</p>
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
