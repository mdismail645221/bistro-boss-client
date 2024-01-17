import React from 'react';

const SectionTitle = ({subHeading, mainHeading, color}) => {
    return (
        <div className='flex flex-col justify-center items-center gap-3 mb-14'>
            <p className="text-[#D99904]">---{subHeading}---</p>
            <div className="section-border border-2 border-[#E8E8E8] w-[300px]"></div>
            <h3 className={`${color ? color : "text-[#000]"} text-3xl font-bold`}>{mainHeading}</h3>
            <div className="section-border  border-2 border-[#E8E8E8] w-[300px]"></div>
        </div>
    );
};

export default SectionTitle;