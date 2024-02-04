import React, { useEffect, useState } from 'react';
import { isLogin } from '../../Utils';
import { Navigate } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Panel from '../Panel/Panel';
import './SignIn.css';

export default function SignIn() {
  const [inputval, setInputval] = useState('');
  const [isUserLogin , setIsUserLogin] = useState(false);

  useEffect(()=>{
    console.log('isUserLogin ', isUserLogin);
  },[inputval])

  // useEffect(()=>{
  //   setIsUserLogin(!isUserLogin);
  // },[inputval,isUserLogin])


  // const enterance = function (input) {
  //   let isUserLogin = isLogin(input);
  //   return isUserLogin
  // }
  // let isUserLogin;

  // let isUserLogin = enterance(inputval)

  // console.log('isUserLogin ', typeof (isUserLogin));

  return (
    <div className='form'>
      <span>Name:</span>

      <input type="text"
        placeholder='Please Enter Your Name'
        value={inputval}
        onChange={e => setInputval(e.target.value)} />

      <button
        className='btn'
        onClick={() => {setIsUserLogin(isLogin(inputval)) 
        }}>
        Sign in
      </button>

      {
        isUserLogin &&
        <PrivateRoute
          login={isUserLogin}
        />


      }

    </div>
  )
}
