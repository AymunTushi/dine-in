import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init'
import SocialLogin from './SocialLogin/SocialLogin';

const Registration = () => {
  const navigate=useNavigate()

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});

  
  const [agree,setAgree]=useState(false)


  const navigateLogin=event=>{
    navigate('/login')
  }

  const handleRegister=event=>{
    event.preventDefault()
    const name=event.target.name.value
    const email=event.target.email.value 
    const password=event.target.password.value
    createUserWithEmailAndPassword(email, password)
  }

    return (
        <>
        <div className='container w-50 mx-auto mt-5 pb-4'>
            <h2 className='text-center text-primary '>Please Register</h2>
            <Form onSubmit={handleRegister}>

              <Form.Group className="mb-3" controlId="formBasicName">
        
        <Form.Control type="text" name="name" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="email" name="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>

      <div className='mt-2 mb-2 w-50'>
     <input onClick={()=>setAgree(!agree)} className="form-check-input mx-2" type="checkbox" value="" id="flexCheckDefault"/>
     {/* after clicking checkbox value of setAgree will be changed */}

  <label className={`ps-2 ${agree?'':'text-danger'}`} for="flexCheckDefault">Accept Dine-in Terms and Conditions</label>
   
   </div>

        <Button disabled={!agree} variant="primary w-50" type="submit"> {/* if do not agree then disable the submit button*/}
          Register
        </Button>
        </Form>
        <p>Already Registered?<Link to={'/login'} className='text-primary text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        <SocialLogin></SocialLogin>
        </div>
        </>
    );
};

export default Registration;