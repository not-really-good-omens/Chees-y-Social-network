import React from "react";
import w from './Skills.module.css';

const Skills = (props) =>{
    return (<div className={w.skills}>
<div className={w.item}>
<span>{props.message1}</span>
<span>{props.message2}</span>
</div>
    </div>)
}

export default Skills;