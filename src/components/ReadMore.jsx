import React from 'react';
import { useNavigate } from 'react-router-dom';
import { articles } from '../constants';

const ReadMore = ({ articleId }) => {
    const navigate = useNavigate();
    const article = articles.find((item) => item.id === articleId);

    const { image, title, description } = article;
    return (
        <section className='bg-gray-100'>
            <div className='container py-20 lg:py-[60px]'>
                <button className='group flex justify-center items-center w-8 h-8 rounded-full bg-primaryBlue text-white shadow-lg mb-4'>
                    <span
                        className='transition duration-300 group-hover:translate-x-[-4px]'
                        onClick={() => navigate(-1)}
                    >
                        &larr;
                    </span>
                </button>

                <div className='flex justify-center mb-12'>
                    <img src={image} className='rounded-2xl' alt='Image' />
                </div>

                <h3 className='text-primaryBlue font-bold text-3xl md:text-4xl lg:leading-[60px] lg:text-5xl'>
                    {title}
                </h3>

                <div className='mt-12'>
                    {description.map((desc, i) => {
                        return (
                            <p key={i} className='mb-4 lg:text-lg'>
                                {desc}
                            </p>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ReadMore;
