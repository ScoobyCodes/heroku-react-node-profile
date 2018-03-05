import React,{Component} from 'react';
import BgImage from '../../Components/Ui/BgImage/bgImage';
import Aux from '../../hoc/Aux/aux';
import fbImg from '../../Assests/profiles/facebook.png';
import gitImg from '../../Assests/profiles/github.png';
import chefImg from '../../Assests/profiles/codechef.png';
import spojImg from '../../Assests/profiles/spoj.jpeg';
import linkedinImg from '../../Assests/profiles/linkedin.png';
import classes from './contact.css';
import Profile from '../../Components/Profile/profile';
import Button from '../../Components/Ui/ButtonResume/Button';
import ContactForm from '../../Components/ContactForm/contactForm';
import axios from '../../axios';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class contact extends Component {
    state = {
        socialWeb: {
            facebook : {
                Link: "https://www.facebook.com/scoobyfa",
                img: fbImg
            },
            github : {
                Link: "https://github.com/ScoobyCodes",
                img: gitImg
            },
            Linkedin : {
                Link: "https://www.linkedin.com/in/sourabh-gupta-37a027108/",
                img: linkedinImg
            }
        },
        coding: {
            spoj : {
                Link: "http://www.spoj.com/users/scooby123",
                img: spojImg
            },
            codechef : {
                Link: "https://www.codechef.com/users/scooby_123",
                img: chefImg
            }
        }
    }

    downloadResume = () => {
           axios.get('/resume').then(res => {
               console.log(res);
           });
    }

    render() {
        let socialWebArray = [];
        let codingArray = [];

        for(let key in this.state.socialWeb) {
            socialWebArray.push({
                id : key,
                desc : this.state.socialWeb[key]
            })
        }

        for(let key in this.state.coding) {
            codingArray.push({
                id: key,
                desc : this.state.coding[key]
            })
        }

        const socialWeb = socialWebArray.map(x => (
            <Profile key={x.id} img={x.desc.img} link={x.desc.Link}/>
        ))

        const coding = codingArray.map(x => (
            <Profile key={x.id} img={x.desc.img} link={x.desc.Link}/>
        ))


        return (
            <Aux>
               <BgImage>
                   <div className={classes.Contact}>
                       <div className={classes.Profiles}>
                           <div className={classes.SocialWeb}>{socialWeb}</div>
                           <div className={classes.Coding}>{coding}</div>
                       </div>
                       <Button clicked={this.downloadResume}>Resume</Button>
                       <div className={classes.ContactForm}>
                           <ContactForm history={this.props.history}/>
                       </div>
                   </div>
               </BgImage>
            </Aux>
        )
    }
}

export default withErrorHandler(contact,axios);