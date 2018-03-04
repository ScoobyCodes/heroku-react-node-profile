import React,{Component} from 'react'
import Aux from '../Aux/aux'
import classes from './layout.css'
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../Components/Navigation/SideDraw/SideBar';

class Layout extends Component {

  state = {
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {return {showSideDrawer: !prevState.showSideDrawer}})
  }

  render() {
    return (
      <Aux>
      <div>
        <Toolbar
            drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer
            open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
      </div>
      <main className={classes.Content}>
          {this.props.children}
      </main>
      </Aux>
    );
  }
}

export default Layout;