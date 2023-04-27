import React from "react";

import { useForm } from "react-hook-form";




const Checkout = () => {
    const {
        register,
        
      } = useForm();
      const handleSubmit=(d)=>
     // alert(JSON.stringify(d));
     alert ('Thanks for Booking')
    
      return (
        <div className="mx-auto">
          <h2 className="m-4"> Keep In Touch</h2>
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input {...register ("firstName")}/>
            </label>
            <label>
                Phone:
                <input {...register ("phone")}/>
            </label>
            <label>
                Email:
                <input {...register ("email")}/>
            </label>
            <label>
                Address:
                <input {...register ("address")}/>
            </label>
          
          <input type="submit" value="submit"/>
        </form>
        </div>
      );
}



export default Checkout