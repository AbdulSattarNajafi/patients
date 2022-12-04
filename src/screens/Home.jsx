import React from "react";
import { useNavigate } from "react-router-dom";

import { homeScreen } from '../constants/index';

import HeroSection from '../components/HeroSection';
import TextImageSection from '../components/TextImageSection';
import GetStarted from '../components/GetStarted';

const Home = () => {
    const navigate = useNavigate();
    const { hero, healthcare, growth } = homeScreen;

    const goToSignupCompany = () => navigate('/sign-up-company');
    const goToSignup = () => navigate('/sign-up');

    return (
        <>
            <HeroSection
                image={hero.image}
                headingText={hero.title}
                description={hero.description}
                buttons={hero.buttons}
                primaryBtn={hero.primaryBtn}
                secondaryBtn={hero.secondaryBtn}
                onPrimaryClick={goToSignup}
                onSecondaryClick={goToSignupCompany}
            />
            <TextImageSection
                background='bg-gray-200'
                flex='lg:flex-row'
                image={healthcare.image}
                title={healthcare.title}
                FirstDescription={healthcare.description[0]}
                secondDescription={healthcare.description[1]}
                id='123'
            />
            <TextImageSection
                background='bg-white'
                flex='lg:flex-row-reverse'
                image={growth.image}
                title={growth.title}
                FirstDescription={growth.description[0]}
                secondDescription={growth.description[1]}
            />
            <GetStarted patientsHandler={goToSignup} companiesHandler={goToSignupCompany} />
        </>
    );
};

export default Home;
