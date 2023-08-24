import React from 'react'
import Rooms from './pages/Rooms'
import Home from './pages/Home'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'
import Navbar from './components/Navbar'



import { Router, Routes, Route } from 'react-router-dom'

const App = () => {

    
  return (
    <>
    <Navbar/>
    
    <Routes>
            <Route path="/Home" element={<Home/>}></Route>
            <Route path="/Rooms" element={<Rooms/>}></Route>
            <Route path='/SingleRoom/:slug' element={<SingleRoom/>}></Route>
            
            <Route path="*" element={<Error/>}></Route>
            </Routes>
    </>
  )
}

export default App