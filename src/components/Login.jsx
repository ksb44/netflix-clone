import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidate } from '../utils/Validate' 
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { addUser } from './userSlice';
import { auth } from '../utils/Firebase';
import { useDispatch } from 'react-redux';
import { BACKGROUND } from '../constants/constants';


const Login = () => {

    const [isSignInForm,setIsSignInForm]=useState(true)
    const [error,setError]=useState(null)
    const [isCheck,setIsCheck]=useState(false)
    const name=useRef(null)
    const email=useRef(null)
    const password=useRef(null)
    const dispatch=useDispatch()
    const handleClick=()=>{

        setIsSignInForm(!isSignInForm)
    }
    const handleCheck=()=>{
        setIsCheck(!isCheck)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
       const emailValue=email.current.value
       const passwordValue=password.current.value
       const message=checkValidate(emailValue,passwordValue)
       setError(message)

       if(message) return;

        if(!isSignInForm){

            createUserWithEmailAndPassword(auth, emailValue, passwordValue)
            .then((userCredential) => {
              const user = userCredential.user;
              updateProfile(user, {
                displayName: name.current.value, photoURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fih0.redbubble.net%2Fimage.618427277.3222%2Fflat%2C1000x1000%2C075%2Cf.u2.jpg&f=1&nofb=1&ipt=67936349627c0da8f6042d2f78763f39b157e85949168847049a13743b67a45f&ipo=images"
              }).then(() => {
               
         
                    const {uid,email,displayName,photoURL}=auth.currentUser;
                       dispatch(addUser({uid,email,displayName,photoURL}))
                         
                                   
              }).catch((error) => {
                setError(error.message)
                
              });
                
              
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;

              setError(errorCode + "-" + errorMessage)
             
            });
        }
        else {
            signInWithEmailAndPassword(auth, emailValue, passwordValue)
            .then(() => {
          
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setError(errorCode + "-" + errorMessage)
            });
        }
    }
  return (
    <>
      <Header/>
      <div className='absolute '>
        <img className='' src={BACKGROUND} alt="bg" />
      </div>
      <div className=''> 
      <form className='w-[80%] lg:w-1/3 absolute flex flex-col  my-36 mx-auto right-0 left-0 px-6 bg-black  bg-opacity-75  rounded-3xl' >
      <h1 className='text-white text-2xl m-2 p-2'>{isSignInForm ?"Sign In":"Sign Up"}</h1>
      {!isSignInForm && <input type='text' placeholder='Enter Name' className='m-2 p-2 bg-gray-700 text-white' ref={name} />}
    <input type='email' ref={email} placeholder='Email Address' className='m-2 p-2 bg-gray-700 text-white' />
    <input type='password' ref={password} placeholder='Password' className='m-2 p-2 bg-gray-700 text-white' />
    <p className='text-red-600 p-2 m-2'>{error}</p>
    {isCheck ? <button type="submit" className='bg-red-500 h-10 text-white rounded-md  p-2' onClick={handleSubmit}>{isSignInForm ?"Sign In":"Sign Up"}</button> :!isSignInForm ? <button  type="submit" className='bg-red-500 h-10 text-white rounded-md m-2 p-2' onClick={handleSubmit}>{isSignInForm ?"Sign In":"Sign Up"} </button> :<button disabled type="submit" className='bg-red-500 h-10 text-white rounded-md m-2 p-2' onClick={handleSubmit}>{isSignInForm ?"Sign In":"Sign Up"} </button> }
  
    {isSignInForm && <div className='flex justify-between text-sm py-4 '>
    
    <span className='text-white '>  <input type='checkbox' className='mx-2' onChange={handleCheck} />Remember me</span>
    <p className='text-white '>Need help?</p>
    </div>}
    <p className='text-white m-1 p-1'>{isSignInForm ? "New to Netflix?":"Already Registered"} <span onClick={handleClick} className='font-bold hover:underline cursor-pointer'> {isSignInForm?"Sign up now.":"Sign In now."}</span></p>

      </form>
      </div>
    
    </>
  )
}

export default Login
