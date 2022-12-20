import React from "react";
import { useNavigate } from 'react-router-dom';
import { patientScreen } from './../constants/index';
import HeroSection from '../components/HeroSection';
import TextImageSection from '../components/TextImageSection';
import Discover from '../components/Discover';

const Patients = () => {
    const navigate = useNavigate();
    const { hero, healthcare, growth } = patientScreen;

    const goToSignup = () => navigate('/sign-up');

    return (
        <>
            <HeroSection
                image={hero.image}
                headingText={hero.title}
                description={hero.description}
                buttons={hero.buttons}
                primaryBtn={hero.primaryBtn}
                onPrimaryClick={goToSignup}
            />
            <TextImageSection
                background='bg-gray-200'
                flex='lg:flex-row'
                image={healthcare.image}
                title={healthcare.title}
                description={healthcare.description}
                articleId='article45Qj'
            />
            <TextImageSection
                background='bg-white'
                flex='lg:flex-row-reverse'
                image={growth.image}
                title={growth.title}
                description={growth.description}
                articleId='article03Qs'
            />
            <Discover
                title='Discover the client Influence Advantage Today'
                buttonText='Get Started'
                getStartedHandler={goToSignup}
            />
        </>
    );
};

export default Patients;
