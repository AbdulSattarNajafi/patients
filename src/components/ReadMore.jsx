import React from 'react';
import { useNavigate } from 'react-router-dom';
import { articles } from '../constants';

const ReadMore = ({ articleId }) => {
    const navigate = useNavigate();
    const article = articles.find((item) => item.id === articleId);

    const { image, title, description } = article;
    return (
        <section className='bg-gray-100'>
            <div className='container pb-16 pt-5'>
                <button className='group flex justify-center items-center w-8 h-8 rounded-full bg-primaryBtn text-white shadow-lg mb-12'>
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

                <h3 className='text-primaryBlue font-bold text-2xl md:text-3xl lg:leading-[60px] lg:text-4xl'>
                    {title}
                </h3>

                <div className='mt-8'>
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
