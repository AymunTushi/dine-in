import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const [services,setServices] = useState([])

    useEffect ( () => {
        fetch ('menu.json')
        .then(res=> res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div id='service'>
        <div className='row w-100 mt-4'>
            <h2 className='mt-4 pt-2 fw-bold'>Our Services</h2>
        <div className='service-container'>
            {
                services.map(service =><Service key={service.id}
                service={service}
                ></Service>)
            }
            
        </div>
        </div>
        </div>
    );
};

export default Services;