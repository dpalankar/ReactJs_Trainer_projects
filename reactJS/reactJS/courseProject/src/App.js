import React from 'react';
import './App.css';
import Home from './Home/Home-view';
import Header from './Header/Header-view';
import Footer from './Footer/Footer-view';
import Grid from '@material-ui/core/Grid';
import {getHt} from './Services'
//import Coaches from './Coaches/Coaches-view';
import Signup from './Signup/Signup-view';
let docHt = getHt();
const styles = {
  headerContainer: {height: '50px'},
  contentContainer: {height: `${docHt-100}px`},
  footerContainer:{height: '50px'}
}
function App() {
  return (
    <Grid container direction="column" alignItems="stretch">
      <Grid item style={styles.headerContainer}><Header/></Grid>
      <Grid item style={styles.contentContainer}><Signup/></Grid>
      <Grid item style={styles.footerContainer}><Footer/></Grid>
    </Grid>
  );
}
export default App;
