import React from 'react';
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Navbar from './RightSide/Navbar/Navbbar';
import Stories from './components/Stories/Stories';
import Raspisanie from './LeftSide/Raspisanie/Raspisanie';
import Calendar from './LeftSide/Calendar/Calendar';
import MyTeams from './LeftSide/MyTeams/MyTeams';
import MyPortfolio from './RightSide/MyPortfolio/MyPortfolio';
import Skills from './RightSide/Skills/Skills';
import Profile from "./components/Profile/Profile";
 import VeamTseros from './LeftSide/MyTeams/VeamTseros/VeamTseros';
 import {Route} from "react-router-dom";
 import { Routes } from 'react-router-dom';
 import BadGirls from './LeftSide/MyTeams/BadGirls/BadGirls';
 import Messages from './components/Header/Messages/Messages';

const App = ( ) => {
  return (
   
    <div className='app-wrapper'>
        <Header/>
        <Skills message1='react' message2=' ux ui design'/>
        <MyPortfolio/>
        <Navbar/>
        <Stories/>
       
        <Raspisanie list1='google job interview' list2='meeting with a client'/>
        <Calendar/>
        <MyTeams team1='VeamTseros' team2='bad girls'/>
        <div class='app-wrapper-content'>
        <Routes>
      <Route path="/"          element={<Content />}/>
      <Route path="/profile"    element={<Profile />} /> 
<Route path="/VeamTseros" element={<VeamTseros />}/>
<Route path="/BadGirls" element={<BadGirls/>}/>
<Route path="/messages" eleemnt={<Messages/>}/>

 </Routes>

         </div>
          </div>
  
  );
}
export default App;
