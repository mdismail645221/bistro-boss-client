import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import ChefRecommand from './ChefRecommand';

const ChefRecommands = () => {

    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('/menu.json')
        .then(res => res.json())
        .then( data => setData(data))
    }, [])



    return (
        <section className='container section-py mx-auto'>

            <SectionTitle
             subHeading="Should Try"
             mainHeading="CHEF RECOMMENDS"
            />

            <div className='grid grid-cols-4 gap-4'>
                {data.slice(0, 8).map(product => <ChefRecommand key={product._id} product={product} />)}
            </div>
            
        </section>
    );
};

export default ChefRecommands;