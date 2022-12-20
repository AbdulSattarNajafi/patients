import React from 'react';
import { useParams } from 'react-router-dom';
import ReadMore from '../components/ReadMore';

const CompaniesReadMore = () => {
    const { articleId } = useParams();

    return <ReadMore articleId={articleId} />;
};

export default CompaniesReadMore;
