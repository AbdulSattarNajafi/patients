import React from "react";

import Theme from "../theme";
import { contactPage } from "../constants";
import HeroSection from "../components/HeroSection";
import ContactMap from "../components/ContactMap";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const { hero } = contactPage[0];

  return (
    <Theme>
      <HeroSection
        image={hero.image}
        headingText={hero.title}
        description={hero.description}
        buttons={hero.buttons}
      />
      <div className='container'>
        <div className='flex flex-col py-16 space-y-12 xl:space-y-0 xl:space-x-12 xl:py-24 xl:flex-row'>
          <div className='h-[500px] xl:h-auto w-full xl:w-1/2'>
            <ContactMap />
          </div>
          <div className='w-full xl:w-1/2 py-4'>
            <ContactForm />
          </div>
        </div>
      </div>
    </Theme>
  );
};

export default Contact;
