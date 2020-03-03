import React, {Component} from 'react'
import styles from './Coaches-style';
import Grid from '@material-ui/core/Grid';
import {SmHeading, RegularTxt} from '../ui/text';
import Users from '../tempJSON';
export default class Coaches extends Component{
    constructor(){
        super();
        this.state = {users: Users};
    }
    render(){
        return (
            <Grid container justify="flex-start" alignItems="flex-start" style={{height: '100%', overflowY: 'scroll'}}>
                {this.renderUsers()}
            </Grid>
        )
    }
    renderUsers(){
        let {users} = this.state;
        return users.map((user, indx)=>{
            return (
                <Grid item xs={12} lg={6} style={{textAlign: 'center'}}>
                    <img src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/256/user-male-icon.png"/>
                    <SmHeading>
                        {user.name}
                    </SmHeading>
                    <RegularTxt>
                        {user.company.catchPhrase} 
                    </RegularTxt>
                </Grid>
            )
        })
    }
}