import React,{Component} from 'react';
import BgImage from '../../Components/Ui/BgImage/bgImage';
import classes from './projects.css';
import Aux from '../../hoc/Aux/aux';
import Spinner from '../../Components/Ui/Spinner/Spinner';
import axios from '../../axios';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Project from './Project/Project';

class projects extends Component {
    state = {
        projects : null,
        loading : false
    }

    componentWillMount() {
        this.setState({loading: true});
        axios.get('/projects')
            .then(res => {
                this.setState({projects: JSON.parse(res.data),loading: false});
            })
    }

    render() {
        let projects = null;

        const projectArray = [];
        for(let key in this.state.projects) {
            projectArray.push({
                id : key,
                desc : this.state.projects[key]
            })
        }

        projects = projectArray.map(x => (
            <Project key={x.desc.Name} name={x.desc.Name} desc={x.desc.Description} link={x.desc.Link} techUsed={x.desc.TechnologiesUsed}/>
        ));

        if(this.state.loading) {
            projects = <Spinner/>;
        }
        return (
        <Aux>
            <BgImage>
                <div className={classes.Projects}>
                    {projects}
                </div>
            </BgImage>
        </Aux>
        )
    }
}

export default withErrorHandler(projects,axios);