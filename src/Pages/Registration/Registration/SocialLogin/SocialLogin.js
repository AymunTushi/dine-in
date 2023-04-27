import React from 'react';
import google from '../../../../images/icon/google.png'
import { useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate=useNavigate()
    let errorElement

    if(error){
    
        errorElement= <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>
    
    }

    if(loading){
        return <Loading></Loading>
    }

    if(user){
        navigate('/home')
    }
   
    return (
        <div>
             <div className='d-flex align-items-center'>
                <div style={{height:'1px'}} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>OR</p>
                <div style={{height:'1px'}} className='bg-primary w-50'></div>     
                </div>
                {errorElement}

                
                    <button onClick={()=>signInWithGoogle()} className='btn btn-info w-50 mx-auto btn-sm'>
                    <img src={google} height={28} alt=''/>
                    <span className='px-3'>Sign In With Google</span>
               
                </button>
                            
            
        </div>
    );
};

export default SocialLogin;