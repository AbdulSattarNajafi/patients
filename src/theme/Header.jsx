import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./../assets/images/logo.svg";
import { navLinks } from "../constants";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    getWindowWidth()
  );

  const showMenuHandler = () => {
    setShowMenu((prevState) => !prevState);
  };

  function getWindowWidth() {
    const width = window.innerWidth;
    return {
      width,
    };
  }

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
    }

    window.addEventListener("resize", handleResize);
    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth.width > 1055) {
      setShowMenu(false);
    }
  }, [windowWidth.width]);

  return (
    <>
      <div className='sticky top-0 bg-white xl:relative z-40 py-4 xl:py-6'>
        <nav className='container flex justify-between items-center'>
          <div className='lg:w-[140px] xl:w-[185px]'>
            <div className='w-[100px] lg:w-[120px] xl:w-[140px]'>
              <img src={Logo} alt='Logo' />
            </div>
          </div>
          <ul className='hidden items-center space-x-9 lg:flex'>
            {navLinks.map((link) => {
              return (
                <li key={link.id}>
                  <Link
                    className={`text-primaryBlue`}
                    to={`/${link.linkTo}`}>
                    {link.text}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className='hidden items-center justify-end space-x-5 w-[185px] lg:flex'>
            <Link
              className='font-semibold text-primaryBlue text-[18px] leading-5'
              to={"/login"}>
              Login
            </Link>
            <Link
              className='btn btn-primary'
              to={"/signup"}>
              Sign Up
            </Link>
          </div>

          <div className='block lg:hidden'>
            <button
              type='button'
              className={`hamburger ${
                showMenu ? "open" : ""
              }`}
              onClick={showMenuHandler}>
              <span className='hamburger-top'></span>
              <span className='hamburger-middle'></span>
              <span className='hamburger-bottom'></span>
            </button>
          </div>
        </nav>
      </div>
      <div
        className={`fixed flex flex-col justify-between transition-all duration-500 top-[83px] left-0 w-[300px] pb-[83px] h-full border-t border-t-gray-200 bg-white z-50 ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        }`}>
        <ul className='pt-8 pb-4'>
          {navLinks.map((link) => {
            return (
              <li key={link.id} className='mb-4'>
                <Link
                  className={`flex items-center text-primaryBlue px-8`}
                  to={`/${link.linkTo}`}>
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className='flex px-8 py-4 items-center space-x-4 border-t border-t-gray-200'>
          <Link
            className='font-semibold text-primaryBlue text-[18px] leading-5'
            to={"/login"}>
            Login
          </Link>
          <Link className='btn btn-primary' to={"/signup"}>
            Sign Up
          </Link>
        </div>
      </div>
      <div
        className={`fixed inset-0 top-[83px] z-40 bg-overlay ${
          showMenu ? "block" : "hidden"
        }`}></div>
    </>
  );
};

export default Header;
