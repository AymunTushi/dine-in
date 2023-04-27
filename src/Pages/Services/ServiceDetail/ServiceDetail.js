import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId}=useParams()
    return (
        <div className='text-center '>
            <Link to='/checkout'>
                <button className='btn btn-primary mt-4'>Proceed Checkout</button>
            </Link>
            
           </div>
    );
};

export default ServiceDetail;