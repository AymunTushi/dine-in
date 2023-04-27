import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../../../images/icon/facebook.png'
import google from '../../../images/icon/google.png'
import twitter from '../../../images/icon/twitter.png'

const Footer = () => {
    const today=new Date()
    const year=today.getFullYear()
    return (
      <div className='d-flex flex-column min-vh-100'>
      <footer className='mt-auto'>
       
        <div className='bg-dark pb-4 pt-4'>
            <div className='d-flex justify-content-center mx-auto'>
            <hr
        style={{
        
          color: 'gray',
          borderColor: 'gray',
          height: '3px',
          width: '300px'
        }}
      />
          <Link> <img className='ps-4 px-2 text-center' src={google} height={28} alt=''/></Link> 
           <Link> <img className='px-2' src={facebook} height={28} alt=''/> </Link>
           <Link> <img className='pe-4 px-2' src={twitter} height={28} alt=''/> </Link>
            <hr
        style={{
          
          color: 'gray',
          borderColor: 'gray',
          height: '3px',
          width: '300px'
        }}
      />
            </div>
            <div>
           &copy; {year} All rights reserved
           </div>
           <div className='text-center text-secondary'>
           <h4 className='fst-italic'>Dine-in</h4>
            <p className=''>Dine-In &copy; {year}. All rights reserved</p>
            
      
        </div>
        </div>
        </footer>
        </div>

        
      
    );
};

export default Footer;