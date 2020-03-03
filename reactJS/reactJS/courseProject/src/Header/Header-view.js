import React, {Component} from 'react'
import styles from './Header-style';
import Grid from '@material-ui/core/Grid';
export default class Header extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <Grid container justify = "space-between" alignItems="stretch" style={styles.headerContainer}>
                <Grid item>
                    <Grid container justify="flex-start" alignItems="stretch">
                        <Grid item>
                            <div style={styles.tab}>
                                Home
                            </div>
                        </Grid>
                        <Grid item>
                            <div style={styles.tab}>
                                Coaches
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <div style={styles.tab}>
                        Sign up
                    </div>
                </Grid>
            </Grid>
        )
    }
}