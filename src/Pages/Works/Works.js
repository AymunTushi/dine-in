import React from 'react';
import logo2 from '../../images/logo/spoon.png'
import logo3 from '../../images/logo/delivery.png'
import logo4 from '../../images/logo/food.png'
import './Works.css'

const Works = () => {
    return (
        <section>
        
        <h2 className='mt-4 pt-4 fw-bold'>How It Works</h2>
        <div className='row'>
        
        <div className="card-group mt-4">

        <div className='col-sm-12 col-md-6 col-lg-4'>
        <div className="card">
          <img height={70} width={99} src={logo2} class="mx-auto" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Choose Your Favorite</h5>
            <p className="card-text">Choose your favorite meals and order online or by phone. It's easy to customize your order.</p>
            </div>
          </div>
        </div>

        <div className='col-sm-12 col-md-6 col-lg-4'>
        <div className="card">
          <img height={70} width={99} src={logo3} class="mx-auto" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">We Deliver Your Meals</h5>
            <p className="card-text">We prepared and delivered meals arrive at your door.</p>
            
          </div>
          </div>
        </div>
         

        <div className='col-sm-12 col-md-6 col-lg-4'>
        <div className="card" >
          <img height={70} width={99} src={logo4} class="mx-auto" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Eat And Enjoy</h5>
            <p className="card-text">No shooping, no cooking, no counting and no cleaning. Enjoy your healthy meals with your family</p>
            </div>
          </div>
        </div>

        
            </div>
            </div>
            
            </section>
            
        
    );
};

export default Works;