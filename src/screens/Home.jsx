import React from "react";
import { useNavigate } from "react-router-dom";

import Theme from "../theme";
import { homeScreen } from "../constants/index";

import HeroSection from "../components/HeroSection";
import TextImageSection from "../components/TextImageSection";
import GetStarted from "../components/GetStarted";

const Home = () => {
  const navigate = useNavigate();
  const { hero } = homeScreen[0];
  const { healthcare } = homeScreen[1];
  const { growth } = homeScreen[2];

  const goToSignupCompany = () =>
    navigate("/signupascompany");
  const goToSignup = () => navigate("/signup");

  return (
    <Theme>
      <HeroSection
        image={hero.image}
        headingText={hero.title}
        description={hero.description}
        buttons={hero.buttons}
        primaryBtn={hero.primaryBtn}
        secondaryBtn={hero.secondaryBtn}
        onPrimaryClick={goToSignupCompany}
        onSecondaryClick={goToSignup}
      />
      <TextImageSection
        background='bg-gray-200'
        flex='lg:flex-row'
        image={healthcare.image}
        title={healthcare.title}
        FirstDescription={healthcare.description[0]}
        secondDescription={healthcare.description[1]}
      />
      <TextImageSection
        background='bg-white'
        flex='lg:flex-row-reverse'
        image={growth.image}
        title={growth.title}
        FirstDescription={growth.description[0]}
        secondDescription={growth.description[1]}
      />
      <GetStarted
        patientsHandler={goToSignup}
        companiesHandler={goToSignupCompany}
      />
    </Theme>
  );
};

export default Home;
