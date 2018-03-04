import React,{Component} from 'react';
import classes from './project.css';

class project extends Component {
    state = {
        name : this.props.name,
        desc : this.props.desc,
        techUsed : this.props.techUsed,
        link : this.props.link
    }


    render() {
        return (
            <div className={classes.Project}>
                <div className={classes.Name}>{this.state.name}</div>
                <div className={classes.Desc}>{this.state.desc}</div>
                <div className={classes.TechUsed}>{"Technologies Used Are " + this.state.techUsed}</div>
                <div className={classes.Link}> <a href={this.state.link}>Project Link</a> </div>
            </div>
        );
    }
}
export default project;