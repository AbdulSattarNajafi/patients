import React, {
  useState,
  useEffect,
  useContext,
} from "react";
import { Link } from "react-router-dom";
import Logo from "./../assets/images/logo.svg";
import Avatar from "./../assets/images/avatar.png";
import Logout from "./../assets/images/log-out.svg";
import Settings from "./../assets/images/settings.svg";
import Password from "./../assets/images/change-password.svg";
import { navLinks } from "../constants";
import AuthContext from "../store/ auth-context";
import { useWindowDimensions } from "../hooks";

const Header = () => {
  const authCtx = useContext(AuthContext);
  const [showMenu, setShowMenu] = useState(false);
  const screenWidth = useWindowDimensions();

  const showMenuHandler = () => {
    setShowMenu((prevState) => !prevState);
  };

  useEffect(() => {
    if (screenWidth.width > 1055) {
      setShowMenu(false);
    }
  }, [screenWidth.width]);

  return (
    <>
      <div className='sticky top-0 bg-white xl:relative z-40 py-4'>
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

          <div className='hidden justify-end lg:w-[140px] xl:w-[185px] lg:flex'>
            {!authCtx.isLoggedIn && (
              <div className='flex items-center justify-end space-x-5'>
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
            )}

            {authCtx.isLoggedIn && (
              <div className='relative group'>
                <div className='w-10 h-10 rounded-lg cursor-pointer'>
                  <img src={Avatar} alt='User Image' />
                </div>

                <div className='absolute top-full right-0 w-72 bg-white text-gray-700 border border-gray-200 rounded-md shadow-xl z-50 invisible opacity-0 translate-y-8 transition-all duration-500  group-hover:visible group-hover:opacity-100 group-hover:translate-y-0'>
                  <ul className=''>
                    <li className='flex items center space-x-4 p-6'>
                      <div className='w-10 h-10 rounded-lg'>
                        <img
                          src={Avatar}
                          alt='User Image'
                        />
                      </div>
                      <div className='flex flex-col justify-center'>
                        <p className='text-xs font-semibold'>
                          Example@example.com
                        </p>
                        <p className='text-xs'>Use Name</p>
                      </div>
                    </li>
                    <li className='border-t border-t-gray-200 pt-4 px-2'>
                      <Link
                        to={"/settings"}
                        className='flex w-full rounded-md py-2 px-4 items-center transition-all duration-300 hover:bg-gray-100'>
                        <img src={Settings} alt='icon' />
                        <span className='inline-block ml-3'>
                          Account Settings
                        </span>
                      </Link>
                    </li>
                    <li className='mt-2 pb-4 px-2'>
                      <button
                        type='button'
                        className='flex w-full rounded-md py-2 px-4 items-center transition-all duration-300 hover:bg-gray-100'>
                        <img src={Password} alt='icon' />
                        <span className='inline-block ml-3'>
                          Change Password
                        </span>
                      </button>
                    </li>
                    <li className='border-t border-t-gray-200 py-4 px-2'>
                      <button
                        type='button'
                        onClick={authCtx.logout}
                        className='flex w-full rounded-md py-2 px-4 items-center transition-all duration-300 hover:bg-gray-100'>
                        <img src={Logout} alt='icon' />
                        <span className='inline-block ml-3'>
                          Log Out
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            )}
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
