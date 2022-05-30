import React from 'react';
 import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
 BrowserRouter,
Routes,
 Route,
 } from "react-router-dom";
import Profile from './components/Profile/Profile';


//  ReactDOM.render(
//  <BrowserRouter>
//   <App/>
//      {/* <Routes>
//       <Route path="/" element={<App />} />
//      <Route path="profile" element={<Profile />} />
      
//     </Routes> */}
//   </BrowserRouter>,
//   ),
//  document.getElementById('root');



ReactDOM.render(
 <BrowserRouter>
    <React.StrictMode>
   <App />
 </React.StrictMode></BrowserRouter>,
document.getElementById('root')
 
 );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// import { render } from "react-dom";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
// import Profile from "./components/Profile/Profile";


//  const rootElement = document.getElementById("root");
//  render(
//    <BrowserRouter>
//      <Routes>
//        <Route path="/" element={<App />} />
//       <Route path="profile" element={<Profile />} />
//      </Routes>
//   </BrowserRouter>,
//   rootElement
//  );

reportWebVitals();
