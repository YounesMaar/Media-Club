import { Links, SocialMedia } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <div className='container py-10 text-white text-xs panel md:h-[85vh] bg-[#272727]'>
      <div className='flex flex-col md:flex-row justify-around items-center'>
        <div className='flex flex-col items-center m-4 md:mt-3'>
          <Image
            src='/logo.png'
            alt='logo'
            priority
            width={200}
            height={100}
          />
          <h1 className='text-[14px] mt-10 text-center md:text-left'>
            l agence conseil en communication <br /> orientee business centric
          </h1>
        </div>
        <div className='Contact mt-10 md:mt-28 '>
          <h1>NEW LETTER</h1>
          <form className='relative'>
            <input
              type='email'
              placeholder='Enter your E-mail address'
              className='border-b-2 border-gray-500 text-white bg-transparent w-72 mt-2 md:mt-10 focus:outline-none text-[16px] py-3'
            />
            <Mail className='absolute bottom-2 right-2' />
          </form>
        </div>
        <section>
          <div className='Links flex  mt-10 md:flex-row md:gap-12 gap-20 md:text-[12px] font-Poppins '>
            <div className='flex flex-col gap-y-5 '>
              <h2 className='text-[13px] mb-3'>SITEMAP</h2>
              {Links.map((item, i) => (
                <Link
                  className='uppercase'
                  href={item.href}
                  key={i}>
                  {item.label}
                </Link>
              ))}
              <Link
                href='/contact'
                className='uppercase'>
                Contact
              </Link>
              <Link
                href='/Home'
                className='uppercase'>
                Home
              </Link>
            </div>
            <div className='SocialMedia flex flex-col gap-y-5 '>
              <h2 className='text-[14px]  font-poppins mb-3'>SOCIALS</h2>

              {SocialMedia.map((SOCIALS, i) => (
                <Link
                  className='uppercase text-xs'
                  href={SOCIALS.href}
                  key={i}>
                  {SOCIALS.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className='md:flex md:justify-evenly items-center mt-20    text-center '>
        <div>
          <p className='text-gray-300  my-3'>Politique de confidentialité</p>
        </div>

        <div>
          <h1 className='text-xl font-Poppins underline underline-offset-8 my-3'>
            Capital@Media.agency
          </h1>
        </div>
        <div>
          <h2 className='font-Poppins'>
            © 2020 Media Capital. All rights reserved
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
