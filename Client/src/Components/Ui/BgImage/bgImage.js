import React,{Component} from 'react';
import classes from './BgImage.css';
import bgImg from '../../../Assests/images/bgImage.jpg';

const bgImage = (props) => {
    return (
        <div className={classes.bgImage}>
            {props.children}
            <img src={bgImg}></img>

        </div>
    );
}


export default bgImage;