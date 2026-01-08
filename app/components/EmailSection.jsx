"use client";
import React, { useState } from "react";
import GithubIcon from "../../public/icons8-github.svg";
import LinkedInIcon from "../../public/icons8-linkedin.svg";
import Link from "next/link";
import Image from "next/image";

function EmailSection() {
  const [emailSent, setEmailSent] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;

    const response = await fetch("https://formspree.io/f/mblewplr", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(form),
    });

    if (response.ok) {
      setEmailSent(true);
      form.reset();
    }
  }

  return (
    <section className='grid gap-4 py-8 my-1 md:grid-cols-2 md:my-12' id='contact'>
      <div>
        <h3 className='text-xl pt-8 font-bold my-2 text-(--violet-700)'>Get in Touch</h3>

        <p className='max-w-md mb-4'>
          For inquiries, collaborations, or opportunities, you can reach me via social media or send a quick email.
        </p>

        <div className='flex flex-row gap-2 socials'>
          <Link href='https://github.com/temycodes'>
            <Image src={GithubIcon} alt='GitHub Icon' width={30} height={30} className='hover:opacity-70' />
          </Link>

          <Link href='http://linkedin.com/in/temi-owopetu-b6b18a129'>
            <Image src={LinkedInIcon} alt='LinkedIn Icon' width={30} height={30} className='hover:opacity-70' />
          </Link>
        </div>
      </div>

      <div>
        <form className='flex flex-col mt-2' onSubmit={handleSubmit}>
          <div className='mb-6'>
            <label htmlFor='email' className='block mb-1 text-sm font-medium'>
              Your Email
            </label>
            <input
              name='email'
              type='email'
              id='email'
              required
              placeholder='NohoHank67@gmail.com'
              className='border border-(--violet-700/20) bg-violet-600/10 text-sm rounded-lg w-full p-2.5'
            />
          </div>

          <div className='mb-6'>
            <label htmlFor='subject' className='block mb-1 text-sm font-medium'>
              Subject
            </label>
            <input
              name='subject'
              type='text'
              id='subject'
              required
              placeholder='...subject here'
              className='border border-(--violet-700) bg-violet-600/10 text-sm rounded-lg w-full p-2.5'
            />
          </div>

          <div className='mb-6'>
            <label htmlFor='message' className='block mb-2 text-sm font-medium'>
              Message
            </label>
            <textarea
              name='message'
              id='message'
              required
              rows={4}
              placeholder='...message'
              className='border border-(--violet-700) bg-violet-600/10 text-sm rounded-lg w-full p-2'
            />
          </div>

          <button
            type='submit'
            disabled={emailSent}
            className='w-full px-5 py-2 font-medium rounded-full bg-(--violet-700) hover:bg-(--violet-800) text-white'
          >
            submit
          </button>

          {emailSent && <p className='mt-3 text-green-500 text-sm'>Message sent successfully!</p>}
        </form>
      </div>
    </section>
  );
}

export default EmailSection;
