import React from "react";
import sideimg from "../../assets/images/sideimg.png";
import page from "../../assets/images/page.webp";
const ExamplesSection = () => {
  return (
    <section className='max-w-[1920px] mx-auto relative mt-24 mb-36'>
      {/* side img */}
      <div className='absolute -top-40 left-0 w-1/3 -z-10'>
        <img className='w-full' src={sideimg} alt='' />
      </div>
      <div className='maxW'>
        <h3 className='uppercase text-7xl font-extrabold text-center tracking-widest'>
          examples
        </h3>

        <div className='mt-28 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 '>
          {/* First Card */}
          <div className='flex flex-col items-center p-4 text-center'>
            <div className='mb-5'>
              <h5 className='my-3 text-3xl font-bold uppercase'>First:</h5>
              <p className='capitalize text-xl font-semibold'>
                give us a challenge and set the duration.
              </p>
            </div>
            <div className='mb-5'>
              <h5 className='my-3 text-3xl font-bold uppercase'>second:</h5>
              <p className='capitalize text-xl font-semibold'>
                choose the reward for the completed challenge.
              </p>
            </div>
            <div className='mb-5'>
              <h5 className='my-3 text-3xl font-bold uppercase'>third:</h5>
              <p className='capitalize text-xl font-semibold'>
                let Gen-z-🌎 fascinate you
              </p>
            </div>
          </div>

          {/* second card */}
          <div className='pageBg flex flex-col items-center justify-center p-4 text-center'>
            <div className='mb-2'>
              <p className='uppercase font-semibold text-lg'>what</p>
              <p className='uppercase font-semibold text-lg px-5'>
                make our product more appealing for gen z
              </p>
            </div>
            <div className='mb-2'>
              <p className='uppercase font-semibold text-lg'>duration</p>
              <p className='uppercase font-semibold text-lg'>
                can you do it in 2 weeks?
              </p>
            </div>
            <div className='mb-2'>
              <p className='uppercase font-semibold text-lg'>awards</p>
              <p className='uppercase font-semibold text-lg px-5'>
                Free samples and one hour with our legal advisor
              </p>
            </div>
          </div>

          {/* Third Card */}
          <div className='pageBg flex flex-col items-center justify-center p-4 text-center'>
            <div className='mb-2'>
              <p className='uppercase font-semibold text-lg'>what</p>
              <p className='uppercase font-semibold text-lg px-5'>
                design my new home (gen z style)
              </p>
            </div>
            <div className='mb-2'>
              <p className='uppercase font-semibold text-lg'>duration</p>
              <p className='uppercase font-semibold text-lg'>
                I give you 4 weeks
              </p>
            </div>
            <div className='mb-2'>
              <p className='uppercase font-semibold text-lg'>awards</p>
              <p className='uppercase font-semibold text-lg px-5'>
                I can offer a professional photo shoot
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
