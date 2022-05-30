import React from 'react';
import a from './Content.module.css';
import './Posts/Posts';
import Posts from './Posts/Posts';

const Content = () => {
    return <div className={a.content}>
         <div>
           <img src='https://data.whicdn.com/images/238932713/original.jpg'/>
           </div>         
          <Posts message='hi im sonya' countlikes='15'/>
          <Posts message="it's my first post" countlikes='20'/>
    </div>}


    export default Content;