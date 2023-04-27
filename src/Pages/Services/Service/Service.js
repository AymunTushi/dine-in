import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id,name,price,description,img}=service
    const navigate=useNavigate()

    const navigateToServiceDetail =id=>{
        navigate(`/service/${id}`)
    }
    return (
        <div className='single-service p-4 mt-4 px-4 mx-auto col-sm-12 col-md-6 col-lg-4'>
        
            
            <img className='image' height={200} width={250}src={img} alt=''/>
            <h3 className='mt-4'><b>{name}</b></h3>
            <h4>Price: {price}</h4>
            <small>{description}</small><br></br>
            
            
            <button onClick={()=> navigateToServiceDetail(id)} className='btn-btn-primary mt-2 '>View More</button>
            
            
            </div>
    );
};

export default Service;