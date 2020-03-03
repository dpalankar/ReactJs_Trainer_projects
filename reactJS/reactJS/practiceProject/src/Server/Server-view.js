import React, {Component} from 'react';
import {capitalize} from '../util';
import styles from './Server-style'
export default class Server extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let {name, status} = this.props;
        return (
            <span style={status==='online'?styles.online:styles.offline}>Sever name: {capitalize(name)}. Server status: {status}</span>
        )
    }
    getServerStatus(){
        return Math.random()>.5?'Online':'Offline'
    }
}