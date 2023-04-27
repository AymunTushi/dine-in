import React from 'react';
import { Helmet } from 'react-helmet';
import person from '../../images/person.jpg'

const About = () => {
    return (
        <div>
        <Helmet>
            <title>About- Dine-In</title>
        </Helmet>
        
        <div className=' pt-4 d-flex h-100'>
            <div className='w-50 ps-4'>
            <h3 className='mt-4'>WELCOME!</h3>
            <h5 className='text-secondary fst-italic'>Our Goal</h5>
            <span>"<b>I am Tushi</b>,founder of Dine-In. Dine-In is a young fast growing online food catering service which tries to make your life easy.It's goal is to provide you authentic tastes desserts,made in a healthy way"</span>
            <span>Currently we are  making limited dessert item,but in future we will allocate all types of dessert. We study and do research on authentic tastes of food.We will never compromise with the quality, as it is our responsibility to serve our customer with best quality food.</span>
        </div>
        <div className='w-50'>
        <img className='rounded-circle pt-4 shadow-sm p-3 mb-5 bg-white rounded' height={320} width={300} src={person} alt=''/>
        </div>
        </div>
        </div>
        

        
    );
};

export default About;