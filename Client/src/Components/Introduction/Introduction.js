import React,{Component} from 'react';
import classes from './Introduction.css';
import Aux from '../../hoc/Aux/aux';

const hobbies = [
    "Full Stack Web Developer", "Competitive Programmer" , "Traveller" , "Caffeine Addict"  , "Cricket Enthusiast" , "Tech Enthusiast",
    "Mathematical Freak","Machine Learning Enthusiast","Loves Music","Admires Knowledge"
]


const name = (
            <span>
              SOURABH &nbsp; &nbsp; GUPTA
            </span> );


const introduction = () => {
    const hobbiesElement = hobbies.map(x => {
        return (
              <div>
                  {x}
              </div>
        );
    })

    const card = (
        <Aux>
           <div className={classes.Introduction}>
               <div className={classes.Name}>{name}</div>
               <div className={classes.hobbies}>{hobbiesElement}</div>
           </div>
        </Aux>
    );
    return card;

}
export default introduction;