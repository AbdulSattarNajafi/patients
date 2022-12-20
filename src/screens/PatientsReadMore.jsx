import React from 'react';
import { useParams } from 'react-router-dom';
import ReadMore from '../components/ReadMore';

const PatientsReadMore = () => {
    const { articleId } = useParams();

    return <ReadMore articleId={articleId} />;
};

export default PatientsReadMore;
