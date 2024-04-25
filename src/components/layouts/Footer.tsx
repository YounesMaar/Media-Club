import { Links,SocialMedia } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <div
      className='container Footer py-10 text-white text-xs panel h-[550px] 
    flex  justify-around items-center z-50'>
      <div className='flex  flex-col  m-4 mt-32 '>
        <Image
          src='/logo.png'
          alt='logo'
          priority
          width={200}
          height={100}
        />
        <h1 className='text-[14px] mt-10'>
          l'agence conseil en communication <br /> orientee business centric
        </h1>
        <p className='w-2/3 mt-48 text-gray-300 text-[12px] '>Politique de confidialite</p>
      </div>
      <div className='contact mt-60'>
        <h1>NEW LETTER</h1>
        <form
          action='#'
          className='relative'>
          <input
            type='email'
            placeholder='Entre you Emial adresse'
            className='border-b-2 border-gray-500  text-white bg-transparent
              w-72 mt-10  focus:outline-none text-[16px]'
          />
          <Mail className=' absolute  bottom-2 right-2' />
        </form>
        <h1 className='mt-36 text-center text-xl font-Poppins underline underline-offset-8'>
          Capital@Media.agency
        </h1>
      </div>
      <section>
        <div className='Links flex gap-12 mt-28 text-[12px] font-Poppins '>
          <div className='flex flex-col gap-y-5 '>
            <h2 className='  text-[13px] mb-3'>SITEMAP</h2>
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
            <h2 className='  text-[13px] mb-3'>SOCIALS</h2>

            {SocialMedia.map((SOCIALS, i) => (
              <Link
                className='uppercase
                  text-xs '
                href={SOCIALS.href}
                key={i}>
                {SOCIALS.label}
              </Link>
            ))}
          </div>
        </div>
        <p className='mt-28 text-[12px] font-Poppins text-gray-300 '>
          © 2020 Media Capital. All rights reserved.
        </p>
      </section>
    </div>
  );
};

export default Footer;
