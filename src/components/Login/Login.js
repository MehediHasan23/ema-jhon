import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useHistory } from 'react-router';

import './Login.css'


const Login = () => {
  const {signInUsingGoogle} = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from ||'/shop';
  const handelGoogle =()=>{
    signInUsingGoogle()
    .then(result=>{
      history.push(redirect_uri)
    })
  }
  
  return (
    <div className='login-form'>
      <div>
        <h2>LogIn</h2>
        <form >
          <input type="email" name="" id="" placeholder='your email' />
          <br />
          <input type="password" name="" id="" placeholder='password' /><br /> 
          <input type="submit" value="submit" />
        </form>
        <p>New to ema-john <Link to='/register'>login</Link></p>
        <div>
          ----------------or--------------
          
        </div>
        <button onClick={handelGoogle} className='btn-regular'>google sign in</button>
      </div>
    </div>
  );
};

export default Login;