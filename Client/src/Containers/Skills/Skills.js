import React,{Component} from 'react';
import Skill from '../../Components/Ui/Skill/Skill';
import classes from './Skills.css';
import BgImg from '../../Components/Ui/BgImage/bgImage';

class Skills extends Component {
    state = {
        skill1 : {
            Name : "C",
            Value : "7"
        },
        skill2 : {
            Name : "Java",
            Value : "8"
        },
        skill3 : {
            Name : "Java Desktop App",
            Value : "6"
        },
        skill4 : {
            Name :"HTML5 & CSS3",
            Value : "5"
        },
        skill5 : {
            Name : "Linux",
            Value : "6"
        },
        skill6 : {
            Name : "Python",
            Value : "5"
        },
        skill7 : {
            Name : "Javascript",
            Value : "7"
        },
        skill8 : {
            Name : "NodeJS",
            Value : "6"
        },
        skill9 : {
            Name: "Mysql&MongoDb",
            Value: "7"
        },
        skill10 : {
            Name : "ReactJs",
            Value : "8"
        },
        skill11 : {
            Name : "Git DVCS",
            Value : "6"
        }
    }

    render() {
        const k = Object.keys(this.state);
        const m = this.state;
        const skills = k.map((x) => {
            return (
                <Skill skillName={m[x].Name} key={x.substr(x.length-3)} skillValue={m[x].Value} />
            );
        })

        console.log(skills);
        return (
            <BgImg>
            <div className={classes.Container}>
                {skills}
            </div>
            </BgImg>
        )
    }
}

export default Skills;
