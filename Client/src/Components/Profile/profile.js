import React,{Component} from 'react';
import classes from './profile.css';

const profile = (props) => {
    return (
        <div className={classes.Profile}>
            <a href={props.link}><img  src={props.img}/></a>
        </div>
    );
}
export default profile;