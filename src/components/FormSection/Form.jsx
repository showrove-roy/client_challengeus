import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_km78jzd",
        "template_7yb38hf",
        form.current,
        "V6nSayB_P4EsccFXj"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            swal("Good job!", "We will contact you soon!", "success");
            form.current.reset();
          }
        },
        (error) => {
          console.log(error.text);
          if (error.text) {
            swal("Good job!", `${error.text}`, "error");
          }
        }
      );
  };
  return (
    <div
      className='z-50 max-w-3xl mx-auto bg-[#147944] p-5 mt-10 rounded'
      data-aos='zoom-in'
      data-aos-easing='linear'
      data-aos-duration='1500'>
      <form
        ref={form}
        onSubmit={sendEmail}
        className='grid lg:grid-cols-2 grid-cols-1 md:gap-5 gap-3'>
        <div className=''>
          <label htmlFor='name' className='text-white'>
            Full Name
          </label>
          <input
            id='name'
            type='text'
            name='user_name'
            placeholder='Your name'
            className='w-full rounded outline-none py-1 px-2'
            required
          />
        </div>
        <div className=''>
          <label htmlFor='email' className='text-white'>
            Email
          </label>
          <input
            id='email'
            type='email'
            name='user_email'
            placeholder='Type your email address'
            className='w-full rounded outline-none py-1 px-2'
            required
          />
        </div>
        <div className=''>
          <label htmlFor='duration' className='text-white'>
            Duration
          </label>
          <input
            id='duration'
            type='number'
            name='duration'
            placeholder='Type the duration'
            className='w-full rounded outline-none py-1 px-2'
            required
          />
        </div>
        <div className=''>
          <label htmlFor='reward' className='text-white'>
            Reward
          </label>
          <input
            id='reward'
            type='text'
            name='reward'
            placeholder='Type your reward'
            className='w-full rounded outline-none py-1 px-2'
            required
          />
        </div>
        <div className='col-span-2'>
          <label htmlFor='challenge' className='text-white'>
            What is the Challenge?
          </label>
          <textarea
            id='challenge'
            rows='4'
            cols='50'
            name='message'
            className='w-full rounded outline-none py-1 px-2'
            placeholder='Type the challenge'
            required
          />
        </div>

        <div className='flex justify-center col-span-2'>
          <input
            type='submit'
            className='px-8 py-3 font-semibold rounded bg-gray-100 cursor-pointer hover:bg-[#084a42] hover:text-white hover:shadow-2xl hover:scale-105 duration-300 ease-linear hover:-translate-y-1 uppercase tracking-widest'
            value='Submit'
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
