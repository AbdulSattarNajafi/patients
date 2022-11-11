import React from "react";

import FooterLogo from "./../assets/images/footer-logo.svg";
import LinkedinIcon from "./../assets/images/Linkedin.svg";
import InstagramIcon from "./../assets/images/instagram.svg";
import YoutubeIcon from "./../assets/images/youtube.svg";

const Footer = () => {
  return (
    <footer className='bg-gray-200 pb-[60px] pt-[108px]'>
      <div className='container flex flex-col justify-center items-center'>
        <div className='max-w-[130px] lg:max-w-[174px]'>
          <img src={FooterLogo} alt='Logo' />
        </div>
        <p className='max-w-[900px] text-center text-lg text-primaryBlue mt-[30px]'>
          Build trust and authenticity by connecting with
          highly-relevant patient influencers. Within the
          healthcare industry, patient influencers have
          pre-established trust with their audiences.
        </p>
        <div className='flex items-center space-x-3 mt-9 mb-12'>
          <a
            href='#'
            className='flex items-center justify-center w-12 h-12 ring-1 ring-primaryBlue rounded-full ficon'>
            <img src={LinkedinIcon} alt='icon' />
          </a>
          <a
            href='#'
            className='flex items-center justify-center w-12 h-12 ring-1 ring-primaryBlue rounded-full ficon'>
            <img src={InstagramIcon} alt='icon' />
          </a>
          <a
            href='#'
            className='flex items-center justify-center w-12 h-12 ring-1 ring-primaryBlue rounded-full ficon'>
            <img src={YoutubeIcon} alt='icon' />
          </a>
        </div>
        <p className='text-sm md:text-base text-center text-primaryBlue'>
          Copyright &copy;{" "}
          <span>{new Date().getFullYear()} </span>
          <a
            href='#'
            className='font-semibold text-[#448DC9]'>
            Patientsinfluence.com
          </a>{" "}
          | All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
