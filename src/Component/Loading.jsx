import React from 'react';
import { MoonLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-38px)]'>
            <MoonLoader></MoonLoader>
        </div>
    );
};

export default Loading;