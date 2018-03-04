import React,{Component} from 'react';
import BgImage from '../../Components/Ui/BgImage/bgImage';
import classes from './home.css';
import Introduction from '../../Components/Introduction/Introduction';

const home = () => {
    return (
      <div className={classes.home}>
          <BgImage>
              <Introduction/>
          </BgImage>
      </div>
    );
}

export default home;