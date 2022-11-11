import React from "react";

import Theme from "../theme";
import { storyPage } from "../constants";
import HeroSection from "../components/HeroSection";
import TextImageSection from "../components/TextImageSection";

const Story = () => {
  const { hero } = storyPage[0];
  const { healthcare } = storyPage[1];

  return (
    <Theme>
      <HeroSection
        image={hero.image}
        headingText={hero.title}
        description={hero.description}
        buttons={hero.buttons}
      />
      <TextImageSection
        background='bg-white'
        flex='lg:flex-row'
        image={healthcare.image}
        title={healthcare.title}
        FirstDescription={healthcare.description[0]}
        secondDescription={healthcare.description[1]}
      />
    </Theme>
  );
};

export default Story;
