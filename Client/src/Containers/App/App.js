import React, { Component } from 'react';
import './App.css';
import asyncComponent from '../../hoc/asyncComponent/asyncComponent';
import Layout from '../../hoc/Layout/layout';
import {Switch,withRouter,Route,Redirect} from 'react-router-dom';
import home from '../../Containers/Home/home';

const asyncSkills = asyncComponent(() => {
    return import('../../Containers/Skills/Skills.js');
})
const asyncProjects = asyncComponent(() => {
    return import('../../Containers/Projects/projects.js');
})

const asyncContact = asyncComponent(() => {
    return import('../../Containers/Contact/contact.js');
})

class App extends Component {
  render() {

    let routes = (
      <Switch>
          <Route path="/project" component={asyncProjects}/>
          <Route path="/contact" component={asyncContact}/>
          <Route path="/" exact component={home}/>
          <Route path="/skills"component={asyncSkills} />
          <Redirect to="/"/>
      </Switch>
    );
    return (
        <Layout>
            {routes}
        </Layout>
    );
  }
}

export default withRouter(App);
