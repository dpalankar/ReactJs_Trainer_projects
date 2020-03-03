import React, {Component} from 'react'
import styles from './Home-style';
import {BigHeading, RegularTxt} from '../ui';
import Grid from '@material-ui/core/Grid';
export default class Home extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <Grid container direction="column" justify="center" style={{ height: '100%', width: '40%', marginLeft: '10%'}}>
                <Grid item>
                    <BigHeading color="secondary">
                        Keep it simple silly
                    </BigHeading>
                    <RegularTxt>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                    </RegularTxt>
                </Grid>
                
            </Grid>
        )
    }
}