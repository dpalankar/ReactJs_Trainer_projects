import React, {Component} from 'react'
import styles from './Signup-style';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
export default class Signup extends Component{
    constructor(){
        super();
        this.state = {
            loginCred: {e:'akash@getsetgo.fitness', p:'1234'}
        }
    }
    render(){
        return (
            <Grid container direction="row" style={{width: '100%', height: '100%'}} alignItems="center" justify="center">
                <Grid item xs={4} style={{border: '1px solid #ccc', padding: '10px'}}>
                    <form onSubmit={(e)=>{this.login(e)}}>
                        {this.renderInput('text', 'e')}
                        {this.renderInput('password', 'p')}
                        <Button type="submit" variant="contained" color="primary">
                            Primary
                        </Button>

                    </form>
                </Grid>
            </Grid>
        )
    }
    renderInput(type, key){
        return (
            <input type={type} onChange={(e)=>{
                this.changeField(e, 'p')
            }} value={this.state.loginCred[key]}/>
        )
    }
    changeField(e, field){
        console.log(field);
        let {loginCred} = this.state;
        let temp_obj = Object.assign(loginCred);
        temp_obj[field] = e.target.value;
        this.setState({loginCred: temp_obj})
    }
    login(e){
        e.preventDefault();
        console.log(this.state.loginCred);
    }
}