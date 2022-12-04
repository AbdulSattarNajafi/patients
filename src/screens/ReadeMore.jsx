import React from 'react';
import { useParams } from 'react-router-dom';

const ReadeMore = () => {
    const { id } = useParams();

    console.log(id);
    return <div>ReadeMore</div>;
};

export default ReadeMore;
