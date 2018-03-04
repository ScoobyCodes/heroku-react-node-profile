import React from 'react'
import logoImg from '../../../Assests/images/logo.jpg'
import classes from './Logo.css'

const logo = (props) => (
    <div className={classes.Logo} style= {{height: props.height}}>
        <img src={logoImg}/>
    </div>
);

export default logo;