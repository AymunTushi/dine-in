import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';

const Login = () => {
  const emailRef=useRef('')
  const passwordRef=useRef('')
  const navigate=useNavigate()
  const location=useLocation()
  let  errorElement
  let from = location.state?.from?.pathname || "/"

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);



  const handleSubmit=event=>{
    event.preventDefault()
    const email=emailRef.current.value
    const password=passwordRef.current.value
    signInWithEmailAndPassword(email, password)
    

  }

  

  const navigateRegister=event=>{
    navigate('/register')
  }

// Reset password and used toast to give alert
  const resetPassword= async () => {
      const email=emailRef.current.value
      
      if(email) {
        await sendPasswordResetEmail(email);
      toast('Sent email');
      }
      else {
        toast ('please enter your email address')
      }
  }

  // error message
  if(error){
    
    errorElement= <div>
        <p className='text-danger'>Error: {error.message}</p>
    </div>

}
 
// sent back the user to her location after login

  if(user){
    navigate(from, {replace:true})
  }

    return (
        <div>
          <Helmet>
            <title>LogIn- Dine-In</title>
          </Helmet>
        <h2 className='text-center mt-4'>Please Login</h2>
        <div className='w-50 mx-auto mt-4 pb-4'>
            <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
          
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
        </Form.Group>
       
        <Button variant="primary w-50" type="submit">
          Login
        </Button>
        </Form>
        {errorElement}
        <p>Don't have an account?<Link to='/register' className='text-primary text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
        <p>Forget Password?<button className='btn btn-link text-primary text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
        <SocialLogin></SocialLogin>
        <ToastContainer />
        </div>
        </div> 
    );
};

export default Login;