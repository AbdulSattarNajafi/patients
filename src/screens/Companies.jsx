import React from "react";
import { useNavigate } from 'react-router-dom';
import { companiesPage } from '../constants/index';
import HeroSection from '../components/HeroSection';
import TextImageSection from '../components/TextImageSection';
import Discover from '../components/Discover';

const Companies = () => {
    const navigate = useNavigate();
    const { hero, healthcare, growth } = companiesPage;

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
                articleId='article12Acompanies'
            />
            <TextImageSection
                background='bg-white'
                flex='lg:flex-row-reverse'
                image={growth.image}
                title={growth.title}
                description={growth.description}
                articleId='article32Bcompanies'
            />
            <Discover
                title='Discover the Patients Influence Advantage Today'
                buttonText='Get Started'
                getStartedHandler={goToSignup}
            />
        </>
    );
};

export default Companies;
