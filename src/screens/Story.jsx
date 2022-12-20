import React from "react";

import { storyPage } from '../constants';
import HeroSection from '../components/HeroSection';
import TextImageSection from '../components/TextImageSection';

const Story = () => {
    const { hero, healthcare } = storyPage;

    return (
        <>
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
                description={healthcare.description}
                articleId='articleRS32Hk'
            />
        </>
    );
};

export default Story;
