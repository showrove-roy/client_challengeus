import React from "react";
import sideimg2 from '../../assets/images/sideimg2.webp';
import Form from "./Form";

const FormSection = () => {
  return (
    <section className='relative overflow-hidden pt-20 pb-28'>
        <img className="absolute -z-10 rotate-[135deg] -top-[12%] -left-[17%] max-w-3xl" src={sideimg2} alt="" />
        <img className="absolute -z-10 rotate-[35deg] -bottom-[12%] -left-[17%] max-w-3xl" src={sideimg2} alt="" />
        <img className="absolute -z-10 rotate-[230deg] -top-[12%] -right-[17%] max-w-3xl" src={sideimg2} alt="" />
        <img className="absolute -z-10 rotate-[325deg] -bottom-[12%] -right-[17%] max-w-3xl" src={sideimg2} alt="" />
      
      <div className='maxW '>
        <h3 className='uppercase text-7xl font-extrabold text-center tracking-widest'>
          the <br /> challenge
        </h3>

{/* Form */}
        <Form></Form>
      </div>
    </section>
  );
};

export default FormSection;
