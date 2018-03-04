import React,{Component} from 'react';
import classes from './Introduction.css';
import Aux from '../../hoc/Aux/aux';

const hobbies = [
    "Full Stack Web Developer", "Competitive Programmer" , "Traveller" , "Caffeine Addict"
]


const name = (
            <span>
              SOURABH &nbsp; &nbsp; GUPTA
            </span> );

const quote1 = (
  <div className={classes.QuoteName}>
     <span>
         Work Hard Learn EveryDay And Do Better
     </span>
  </div>
);

const quote2 = (
  <div className={classes.QuoteName}>
      <span>
          I think I'm cool. That's all that matters
      </span>
  </div>
);
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
            <div className={classes.Quote1}>{quote1}</div>
            <div className={classes.Quote2}>{quote2}</div>
        </Aux>
    );
    return card;

}
export default introduction;