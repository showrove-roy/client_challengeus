import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import sideimg2 from "../../assets/images/sideimg2.webp";
import Form from "./Form";

const FormSection = () => {
  //   Zoom out
  const zoomOut = useRef(null);
  const { innerHeight } = window;
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const titleOut = self.selector(".titleOut");
      gsap.from(titleOut, {
        scale: 20,
        stagger: 0.25,
        duration: 2,
        opacity:0,
        scrollTrigger: {
          trigger: zoomOut.current,
          pin: zoomOut.current,
          start :"top 10%", 
          end: `+=${innerHeight * 1.2}`,
          scrub: 2,
        },
      });
    }, zoomOut);
    return () => ctx.revert();
  }, []);
  return (
    <section className='relative overflow-hidden pt-20 pb-28' ref={zoomOut}>
      <img
        className='absolute -z-10 rotate-[135deg] -top-[12%] lg:-left-[17%] md:-left-[25%] sm:-left-[30%] -left-[60%] max-w-3xl'
        src={sideimg2}
        alt=''
      />
      <img
        className='absolute -z-10 rotate-[35deg] -bottom-[12%] -lg:-left-[17%] md:-left-[25%] sm:-left-[30%] -left-[60%] max-w-3xl'
        src={sideimg2}
        alt=''
      />
      <img
        className='absolute -z-10 rotate-[230deg] -top-[12%] -lg:-right-[17%] md:-right-[25%] sm:-right-[30%] -right-[60%] max-w-3xl'
        src={sideimg2}
        alt=''
      />
      <img
        className='absolute -z-10 rotate-[325deg] -bottom-[12%] -lg:-right-[17%] md:-right-[25%] sm:-right-[30%] -right-[60%] max-w-3xl'
        src={sideimg2}
        alt=''
      />

      <div className='maxW '>
        <h3
          className='uppercase lg:text-7xl md:text-5xl sm:text-3xl text-xl font-extrabold text-center tracking-widest titleOut'>
          the <br /> challenge
        </h3>

        {/* Form */}
        <Form></Form>
      </div>
    </section>
  );
};

export default FormSection;
