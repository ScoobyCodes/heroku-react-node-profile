import React from 'react';
import classes from './Skill.css';

const tw = 410;
const skill = (props) => {
    const w = ((tw)/10)*(props.skillValue);
    const style1 = {
        width : w
    }

    const style2 = {
        width: tw
    }
    return (
        <div className={classes.container}>
            <div className={classes.skillName}>
                {props.skillName}
            </div>
            <div className={classes.skillBg} style={style2}>
                <div className={classes.skill} style={style1}>
                </div>
            </div>
        </div>
    );
}

export default skill;