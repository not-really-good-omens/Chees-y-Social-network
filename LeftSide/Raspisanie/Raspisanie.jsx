import React from 'react';
import k from'./Raspisanie.module.css';

const Raspisanie= (props) => {
    return <div className={k.raspisanie}>
        <div>
            <div className={k.item}>Upcoming schedule</div>
           <div>{props.list1}</div> 
           <div>{props.list2}</div> 
        </div>
    </div>;
}

export default Raspisanie;