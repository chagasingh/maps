import React, { Fragment, useContext } from 'react';

import * as htmlToImage from 'html-to-image';
import Button from '../UI/Button/Button';
import classes from './Home.module.css';
import Map from '../map';
import { useState } from 'react';
import LogoCube from '../cube/Cube';
import LogoCube2 from '../cube2/Cube2';

const Home = (props) => {
const [vaildCube,setValidCube] =useState(false)

  const exportAsPicture = () => {   
      setValidCube(true)
    }

  return (
    <Fragment>
      <section className={classes.home}>
      <h1>Welcome back !!</h1>
      <Map/>
      <br/>
      <Button onClick={exportAsPicture}>Capture Screenshot</Button>
      <br/>
      <br/>
      { vaildCube && (<LogoCube/>)
      }
      {!vaildCube && (<LogoCube2/>)}
      <br/>
      <br/>
      </section>
    </Fragment>
  );
};

export default Home;
