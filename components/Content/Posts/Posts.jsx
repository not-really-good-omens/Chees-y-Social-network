import React from "react";
import q from './Posts.module.css';

const Posts = (props) => {

    // console.log(props.message);

    return ( <div className={q.posts}>
        <div className={q.item}>
            {props.message}
        </div>
        <div>
            <span> {props.countlikes} likes</span>
           
        </div>
    </div>
    )
}

export default Posts;