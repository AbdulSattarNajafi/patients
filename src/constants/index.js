export const navLinks = [
    {
        id: 'home',
        text: 'Home',
        linkTo: 'home',
    },
    {
        id: 'companies',
        text: 'For Companies',
        linkTo: 'companies',
    },
    {
        id: 'patients',
        text: 'For Patients',
        linkTo: 'patients',
    },
    {
        id: 'story',
        text: 'Our Story',
        linkTo: 'story',
    },
    {
        id: 'contact',
        text: 'Contact',
        linkTo: 'contact',
    },
];

import HomeHeroImage from './../assets/images/homeHero.png';
import HomeHealthcareImage from './../assets/images/home-healthcare.png';
import HomeGrowthImage from './../assets/images/home-growth.png';

export const homeScreen = {
    hero: {
        image: HomeHeroImage,
        title: 'More Impactful Patient Marketing Starts Here',
        description:
            'Build trust and authenticity by connecting with highly-relevant patient influencers.',
        buttons: 2,
        primaryBtn: 'for patients',
        secondaryBtn: 'for companies',
    },
    healthcare: {
        image: HomeHealthcareImage,
        title: 'Healthcare Marketing that Resonates with Your Audience',
        description: [
            'Within the healthcare industry, patient influencers have pre-established trust with their audiences.',
            'Through our platform, we empower healthcare companies across all specialties to achieve more meaningful results from our growing network of vetted influencers. Every collaboration is tailored to your unique product or service offering.',
        ],
    },
    growth: {
        image: HomeGrowthImage,
        title: 'Driving Growth for Our Patient Influencers',
        description: [
            'For patients struggling with health challenges, opportunities for compensation can feel few and far between. ',
            'By becoming a patient influencer, however, these individuals can transform their social media presence into a unique earning opportunity regardless of their audience’s size. All the while, Patients Influence offers tangible strategies to grow.',
        ],
    },
};

// Companies Page
import CompaniesHeroImage from './../assets/images/companiesHero.png';
import CompaniesHealthcareImage from './../assets/images/comapnies-healthcare.png';
import CompaniesGrowthImage from './../assets/images/companies-growth.png';

export const companiesPage = {
    hero: {
        image: CompaniesHeroImage,
        title: 'Go Beyond Traditional Healthcare Marketing Platforms',
        description:
            'Overcome the challenges and legalities of direct-to-patient marketing with Patients Influence.',
        buttons: 1,
        primaryBtn: 'get started',
    },
    healthcare: {
        image: CompaniesHealthcareImage,
        title: 'Accelerate Your Healthcare Marketing Strategy',
        description: [
            'Whether you’re striving for more visits, prescriptions, or sales, Patients Influence accelerates your healthcare marketing strategy by pairing you with influencers who have a direct link to the people you need to reach.',
            'As an intermediary between patients and your marketing message, Patients Influence preserves your anonymity while reaping the benefits of direct-to-patient marketing. Start targeting the right audience with performance-driven campaigns today',
        ],
    },
    growth: {
        image: CompaniesGrowthImage,
        title: 'Putting Our Algorithm to Work for You',
        description: [
            'Instead, Patients Influence skips straight to results through a proprietary algorithm that precisely matches you with the ideal patient audience for your healthcare offering based on age, location, condition, and beyond. In turn, you can maximize your reach with unmatched relevance.',
        ],
    },
};

// Patients Page
import PatientsHeroImage from './../assets/images/patient-hero.png';
import PatientsHealthcareImage from './../assets/images/patient-healthcare.png';
import PatientsGrowthImage from './../assets/images/patient-growth.png';

export const patientScreen = {
    hero: {
        image: PatientsHeroImage,
        title: 'Where Patients Connect with Newfound Earning Opportunities',
        description:
            'Overcome the challenges and legalities of direct-to-patient marketing with Patients Influence.',
        buttons: 1,
        primaryBtn: 'Get started',
    },
    healthcare: {
        image: PatientsHealthcareImage,
        title: 'Patient-Founded. Patient-Focused.',
        description: [
            'Just three years ago, our founder was diagnosed with Non-Hodgkin’s Lymphoma. Luckily, he was cured and went on to not only win a fitness competition, but also graduate at the top of his class.',
            'Inspired to make an even broader impact, he joined Roche, the pharmaceutical company that saved his life. In the process of creating life-saving digital solutions, he recognized a key gap that could improve the lives of patients through the power of patient influencer marketing. That’s when Patients Influence was born.',
        ],
    },
    growth: {
        image: PatientsGrowthImage,
        title: 'Support Your Network with Relevant Content',
        description: [
            'As a patient seeking to support your network, Patients Influence pairs you with relevant healthcare products and services related directly to your unique audience.',
            'By simply posting, you can not only elevate your audience’s wellbeing, but also earn revenue along the way. As we train you on the best strategies to boost engagement, you can watch your passive income soar.',
        ],
    },
};

// Story Page
import StoryHeroImage from './../assets/images/story-hero.png';
import StoryHealthcareImage from './../assets/images/story-healthcare.png';

export const storyPage = {
    hero: {
        image: StoryHeroImage,
        title: 'Our Story',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis gravida condimentum. In tincidunt vitae lectus nec ullamcorper.',
        buttons: false,
    },
    healthcare: {
        image: StoryHealthcareImage,
        title: 'Who We Are',
        description: [
            'The healthcare industry is increasingly becoming more competitive, with patients now demanding a higher level of service quality. This study aims to model the impact of service quality (medical care procedures, administrative practices, hospital image, trustworthiness, patient safety, infrastructure, personnel quality) on patient satisfaction. Using a structured questionnaire, data were gathered from 194 patients from public and private hospitals in Melaka and Johor.',
            'The data were analyzed using a second-generation analytical software, SmartPLS. The results suggest the model can explain 58 percent of the variance in patient satisfaction. Hospital image, patient safety, personnel quality, and social responsibility were the significant predictors of patient satisfaction.',
        ],
    },
};

// Contact Page
import ContactHero from './../assets/images/contact-hero.png';
import ContactHealthcareImage from './../assets/images/story-healthcare.png';

export const contactPage = {
    hero: {
        image: ContactHero,
        title: 'Contact Us',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis gravida condimentum. In tincidunt vitae lectus nec ullamcorper.',
        buttons: false,
    },
    healthcare: {
        image: ContactHealthcareImage,
        title: 'Who We Are',
        description: [
            'The healthcare industry is increasingly becoming more competitive, with patients now demanding a higher level of service quality. This study aims to model the impact of service quality (medical care procedures, administrative practices, hospital image, trustworthiness, patient safety, infrastructure, personnel quality) on patient satisfaction. Using a structured questionnaire, data were gathered from 194 patients from public and private hospitals in Melaka and Johor.',
            'The data were analyzed using a second-generation analytical software, SmartPLS. The results suggest the model can explain 58 percent of the variance in patient satisfaction. Hospital image, patient safety, personnel quality, and social responsibility were the significant predictors of patient satisfaction.',
        ],
    },
};