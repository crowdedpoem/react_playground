import './App.css'
import 'fs'
import { CardTable } from './components/CardTable'
import {SideBar} from './components/SideBar'
import {Profile} from './components/Profile'
import {AddPost} from './components/AddPost'
import { Overlay } from './components/Overlay'
import {Route, Routes} from 'react-router-dom'
import React, {useState, useEffect} from 'react';


function App() { 

  useEffect(() => {
    fetchAll().then( result => {
       if (result)
          setCharacters(result);
     });
 }, [] );

  async function fetchAll(){
    try {
       const response = await axios.get('http://localhost:5000/users');
       return response.data.users_list;     
    }
    catch (error){
       //We're not handling errors. Just logging into the console.
       console.log(error); 
       return false;         
    }
 }

 let Component
 switch (window.location.pathname) {
  case "/":
    Component = <CardTable/>
    break;
 
  case "/profile":
    Component = <Profile/>
    break;
 }
  return (
    
    <div className='App'>
      <div className='heading'>
        <h1>Sager App</h1>
      </div>

    <Overlay/>

    <div className='content'> 
    <SideBar/>

    <Routes>
      <Route path='/' element={<CardTable/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/add-post' element={<AddPost/>}/>
    </Routes>
    </div>
    </div>
      
  )
}

export default App
