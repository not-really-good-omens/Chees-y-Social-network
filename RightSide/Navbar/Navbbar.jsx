import React from 'react';
import classes from './Navbar.module.css';
import { Route, Routes, Link } from 'react-router-dom';
import Profile from '../../components/Profile/Profile';
import Dialogs from '../../components/Dialogs/Dialogs';


const Navbar = () => {
return (<div>
<nav className={classes.nav}>
    <div className={classes.item}>      
    <Link to="/profile">this is your profile</Link>
        </div>

</nav>

{/* <div>
    <Routes>
        <Route path="/Profile" element={Profile}/>
         <Route path="/Dialogs" element={Dialogs}/>
    </Routes>

</div> */}


{/* // <nav className={classes.nav}>
// <div className={classes.item}><a>Profile</a></div>
// <div className={classes.item}><a>Messages</a></div>
// <div className={classes.item}><a>News</a></div>
// <div className={classes.item}><a>Music</a></div>
// <div className={classes.item}><a>Settings</a></div>
// </nav> */}

{/* <Routes>
<Route path="/Profile" element={Profile}/>
<Route path="/Dialogs" element={Dialogs}/>
</Routes> */}
</div>
);
}

export default Navbar;
