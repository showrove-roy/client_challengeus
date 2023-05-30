import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const CompanySection = () => {
  //   Zoom out
  const zoomOut = useRef(null);
  const { innerHeight } = window;
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const titleOut = self.selector(".titleOut");
      gsap.from(titleOut, {
        scale: 100,
        stagger: 0.25,
        duration: 3,
        opacity: 0,
        scrollTrigger: {
          trigger: zoomOut.current,
          pin: true,
          end: `+=${innerHeight * 1.2}`,
          scrub: 2,
        },
      });
    }, zoomOut);
    return () => ctx.revert();
  }, []);
  return (
    <section
      className='maxW h-screen flex items-center justify-center flex-col overflow-hidden -z-10'
      ref={zoomOut}>
      <h2 className='uppercase font-black lg:text-7xl md:text-5xl sm:text-3xl text-xl tracking-widest titleOut'>challenge us</h2>
      <p
        className='uppercase text-xs sm:text-base md:text-lg lg:text-2xl sm:font-extrabold font-medium tracking-widest'
        data-aos='fade-up'
        data-aos-duration='10000'
        data-aos-anchor-placement='top-center'>
        gen-z-world-company
      </p>
    </section>
  );
};

export default CompanySection;
