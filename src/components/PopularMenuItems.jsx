import React from 'react';

const PopularMenuItems = ({item}) => {
    const {image, name,price, recipe } = item;
    return (
        <div className='flex items-center justify-between gap-3'>
            <img width={104} style={{borderRadius: "0 200px 200px 200px"}} src={image} alt={name} />
            <div>
                <h3>{name} -----------------------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-[#BB8506] text-xl'>{price}</p>
        </div>
    );
};

export default PopularMenuItems;