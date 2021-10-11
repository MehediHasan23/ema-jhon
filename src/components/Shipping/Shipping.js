import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css'

const Shipping = () => {
  const { register, handleSubmit,formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
  }
  const {user} = useAuth()

  return (
    <div className='shipping-container'>
      
      <div>
      <form className='shipping-form' onSubmit={handleSubmit(onSubmit)}>
     
     <input defaultValue={user.displayName} {...register("example")} />
     <input defaultValue={user.email} {...register("exampleRequired", { required: true })} />

    
     
     {errors.exampleRequired && <span className='error'>This field is required </span>}
     
     <input type="submit" />
   </form>
      </div>
    </div>
  );
};

export default Shipping;