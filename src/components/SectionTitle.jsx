import React from 'react';

const SectionTitle = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3 mb-5 '>
            <p className='text-[#D99904]'>---From 11:00am to 10:00pm---</p>
            <div className="section-border border-2 border-[#E8E8E8] w-[200px]"></div>
            <h3 className='text-2xl font-bold'>ORDER ONLINE</h3>
            <div className="section-border  border-2 border-[#E8E8E8] w-[200px]"></div>
        </div>
    );
};

export default SectionTitle;