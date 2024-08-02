import React,{useEffect} from 'react'
import {signOut } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser,removeUser } from './userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../constants/constants';
import { setGpt } from './GptSlice';
import { setLanguage } from './LanguageSlice';

const Header = () => {
    const navigate = useNavigate()
    const selector=useSelector(state=>state.user)
    const dispatch=useDispatch()
    const gptFlag=useSelector(state=>state.gpt.gptFlag)
    const handleClick =()=>{

    signOut(auth)
    .then(() => { })
    .catch((error) => {
        navigate('/error')
    });

    }
    useEffect(()=>{

      const unsubscribe= onAuthStateChanged(auth, (user) => {
          if (user) {
           
        const {uid,email,displayName,photoURL}=user
           dispatch(addUser({uid,email,displayName,photoURL}))
             navigate('/browse')
          } else {
           dispatch(removeUser())
           navigate('/')
          
          }
        });
        return ()=>unsubscribe()
  
  },[])

  const handleGpt=()=>{
    dispatch(setGpt())
  }
  const handleLanguage=(e)=>{

    dispatch(setLanguage(e.target.value))
  }
  return (
    <>
    <div className=' absolute bg-gradient-to-b from-gray-500 z-20 md:flex md:flex-row justify-between mt-[0%] md:-mt-[0%] md:py-2 pr-4 pb-4  bg-black'>
      <img src={LOGO} className='w-[40%] mx-auto md:w-[15%] md:mx-0 ' alt="logo"/>
    
   {selector &&  <div className='flex my-auto'>
     {gptFlag &&<select className='rounded-lg mx-2 bg-gray-500 text-white ' onChange={handleLanguage}>
      {SUPPORTED_LANGUAGES.map((lang)=>{
        return <option key={lang.identifier}  value={lang.identifier}>{lang.name}</option>
      })}
    </select> }
    <button onClick={handleGpt} className='bg-purple-700 my-auto py-2 rounded-lg px-1 text-white hover:bg-inherit mx-auto'>
      {gptFlag ? "Homepage" : "AI"}</button>
    <img src={selector.photoURL} alt="usericon" className='w-8 h-8 my-auto m-2'/>
    <p className='bg-white my-auto mx-2 px-2'>{selector.displayName}</p>
    <button className='bg-red-700  rounded-xl h-8 text-white my-auto w-20' onClick={handleClick}>SignOut</button>
    </div>
}
    </div>
    </>
  )
}

export default Header
