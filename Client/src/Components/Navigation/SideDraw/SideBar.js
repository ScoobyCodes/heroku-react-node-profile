import React from 'react'
import Logo from '../../Ui/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDraw.css'
import BackDrop from '../../Ui/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/aux';

const sideDrawer = (props) => {
    let attachedClasses  = [classes.SideDrawer , classes.Close];
    if(props.open) {
        attachedClasses = [classes.SideDrawer,classes.Open];
    }
    return (
        <Aux>
         <BackDrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')} onClick={props.closed}>
            <div className={classes.Logo}>
             <Logo />
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
        </Aux>
    );
};

export default sideDrawer;