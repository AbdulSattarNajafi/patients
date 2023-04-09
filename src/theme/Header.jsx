import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from './../assets/images/logo.svg';
import Avatar from './../assets/images/avatar.png';
import Logout from './../assets/images/log-out.svg';
import Settings from './../assets/images/settings.svg';
import Password from './../assets/images/change-password.svg';
import ArrowIcon from './../assets/images/arrow-down.svg';
import { navLinks } from '../constants';
import { useWindowDimensions, useAuth, useGetUser } from '../hooks';

const Header = () => {
    const authCtx = useAuth();
    const [showMenu, setShowMenu] = useState(false);
    const screenWidth = useWindowDimensions();
    const { users } = useGetUser();
    const userId = localStorage.getItem('ID');
    const [currentUser] = users.filter((user) => user.id === userId);

    const showMenuHandler = () => {
        setShowMenu((prevState) => !prevState);
    };

    useEffect(() => {
        if (screenWidth.width > 1055) {
            setShowMenu(false);
        }
    }, [screenWidth.width]);

    const activeClassName =
        'text-primaryBlue underline underline-offset-8 transition-all duration-300';
    const defaulClassName =
        'text-primaryBlue hover:underline underline-offset-8 transition-all duration-300';

    const mobileNavLink = 'flex items-center text-base text-primaryBlue rounded-lg px-3 py-2';
    const mobileNavLinkActive =
        'flex items-center text-base text-primaryBlue rounded-lg px-3 py-2 bg-gray-100';

    return (
        <header className='sticky top-0 under bg-white xl:relative z-40 py-4 shadow-sm border-b border-gray-300'>
            <nav className='flex justify-between items-center w-full mx-auto px-4 xl:max-w-[1263px] 2xl:max-w-[1504px]'>
                <div className='md:w-[140px] xl:w-[185px]'>
                    <div className='w-[100px] lg:w-[120px] xl:w-[140px]'>
                        <img src={Logo} alt='Logo' />
                    </div>
                </div>
                <ul className='hidden items-center space-x-9 lg:flex'>
                    {navLinks.map((link) => {
                        return (
                            <li key={link.id}>
                                <NavLink
                                    end={link.end}
                                    className={({ isActive }) =>
                                        isActive ? activeClassName : defaulClassName
                                    }
                                    to={`${link.linkTo}`}
                                >
                                    {link.text}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>

                <div className='hidden justify-end xl:w-[185px] lg:flex'>
                    {!authCtx.isLoggedIn && (
                        <div className='flex items-center justify-end space-x-5'>
                            <Link
                                className='font-semibold text-primaryBlue text-[18px] leading-5'
                                to={'/login'}
                            >
                                Login
                            </Link>
                            <Link className='btn btn-primary' to={'/sign-up'}>
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
                                            <img src={Avatar} alt='User Image' />
                                        </div>
                                        <div className='flex flex-col justify-center'>
                                            <p className='text-xs font-semibold'>
                                                {currentUser?.email}
                                            </p>
                                            <p className='text-xs'>{currentUser?.userName}</p>
                                        </div>
                                    </li>
                                    <li className='border-t border-t-gray-200 pt-4 px-2'>
                                        <Link
                                            to={'/settings'}
                                            className='flex w-full rounded-md py-2 px-4 items-center transition-all duration-300 hover:bg-gray-100'
                                        >
                                            <img src={Settings} alt='icon' />
                                            <span className='inline-block ml-3'>
                                                Account Settings
                                            </span>
                                        </Link>
                                    </li>
                                    <li className='mt-2 pb-4 px-2'>
                                        <button
                                            type='button'
                                            className='flex w-full rounded-md py-2 px-4 items-center transition-all duration-300 hover:bg-gray-100'
                                        >
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
                                            className='flex w-full rounded-md py-2 px-4 items-center transition-all duration-300 hover:bg-gray-100'
                                        >
                                            <img src={Logout} alt='icon' />
                                            <span className='inline-block ml-3'>Log Out</span>
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
                        className={`hamburger ${showMenu ? 'open' : ''}`}
                        onClick={showMenuHandler}
                    >
                        <span className='hamburger-top'></span>
                        <span className='hamburger-middle'></span>
                        <span className='hamburger-bottom'></span>
                    </button>
                </div>
            </nav>

            <div
                className={`fixed flex flex-col transition-all duration-500 top-[83px] left-0 w-[300px] pb-[83px] h-full bg-white z-50 border-t border-gray-200 overflow-y-auto ${
                    showMenu ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                {authCtx.isLoggedIn && (
                    <div className='p-3 border-b border-gray-200'>
                        <div className='relative group flex items-center w-full p-2 bg-gray-100 rounded-lg'>
                            <div className='w-10 h-10 rounded-lg mr-2'>
                                <img src={Avatar} alt='User Image' />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <p className='text-xs font-semibold'>Example@example.com</p>
                                <p className='text-xs'>Use Name</p>
                            </div>

                            <div className='ml-auto pr-1'>
                                <img src={ArrowIcon} alt='icon' />
                            </div>

                            <div className='absolute top-full left-0 w-full bg-white text-gray-700 border border-gray-200 rounded-md shadow-xl z-50 invisible opacity-0 translate-y-8 transition-all duration-500  group-hover:visible group-hover:opacity-100 group-hover:translate-y-0'>
                                <ul>
                                    <li className='border-t border-t-gray-200 pt-2 px-2'>
                                        <Link
                                            onClick={() => setShowMenu(false)}
                                            to={'/settings'}
                                            className='flex w-full rounded-md p-2 items-center transition-all duration-300 hover:bg-gray-100'
                                        >
                                            <img src={Settings} alt='icon' className='w-5' />
                                            <span className='inline-block text-sm ml-3'>
                                                Account Settings
                                            </span>
                                        </Link>
                                    </li>
                                    <li className='mt-1 pb-2 px-2'>
                                        <button
                                            type='button'
                                            className='flex w-full rounded-md p-2 items-center transition-all duration-300 hover:bg-gray-100'
                                        >
                                            <img src={Password} alt='icon' className='w-5' />
                                            <span className='inline-block text-sm ml-3'>
                                                Change Password
                                            </span>
                                        </button>
                                    </li>
                                    <li className='border-t border-t-gray-200 py-2 px-2'>
                                        <button
                                            type='button'
                                            onClick={() => {
                                                authCtx.logout();
                                                setShowMenu(false);
                                            }}
                                            className='flex w-full rounded-md p-2 items-center transition-all duration-300 hover:bg-gray-100'
                                        >
                                            <img src={Logout} alt='icon' className='w-5' />
                                            <span className='inline-block text-sm ml-3'>
                                                Log Out
                                            </span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
                <ul className='py-4 px-3'>
                    {navLinks.map((link) => {
                        return (
                            <li key={link.id} className='mb-1'>
                                <NavLink
                                    onClick={() => setShowMenu(false)}
                                    end={link.end}
                                    className={({ isActive }) =>
                                        isActive ? mobileNavLinkActive : mobileNavLink
                                    }
                                    to={`${link.linkTo}`}
                                >
                                    {link.text}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>

                {!authCtx.isLoggedIn && (
                    <div className='flex justify-center items-center mt-auto space-x-4 p-4 border-t border-t-gray-200'>
                        <Link
                            onClick={() => setShowMenu(false)}
                            className='btn btn-primary-outline'
                            to={'/login'}
                        >
                            Login
                        </Link>
                        <Link
                            onClick={() => setShowMenu(false)}
                            className='btn btn-primary'
                            to={'/sign-up'}
                        >
                            Sign Up
                        </Link>
                    </div>
                )}
            </div>
            <div
                className={`fixed inset-0 top-[83px] z-40 bg-overlay ${
                    showMenu ? 'block' : 'hidden'
                }`}
                onClick={showMenuHandler}
            ></div>
        </header>
    );
};

export default Header;
