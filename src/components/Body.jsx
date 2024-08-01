import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'

const Body = () => {


  return (
    
    <Router>
    <Routes>
        <Route path='/' element={ <Login/>}/>
        <Route path='/browse' element={ <Browse/>}/>
    </Routes>
</Router>

  )
}

export default Body
