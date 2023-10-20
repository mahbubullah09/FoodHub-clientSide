import React from 'react';
import { Link } from 'react-router-dom';

const BrandCard = ({brand}) => {
     const {image,name} = brand;

    return (
        <div>
           <Link to={`/brands/${name}`}>
           <div className='flex flex-col  align-bottom items-center gap-4 cursor-pointer'>
                <img className='w-20 h-20 ' src={image} alt="" />
                <h2 className=' font-bold text-blac'>{name}</h2>
            </div>
           </Link>
        </div>
    );
};

export default BrandCard;