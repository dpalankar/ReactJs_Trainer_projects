import React, {Component} from 'react'
import styles from './Footer-style'
export default class Footer extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div style={styles.footerContainer}>
                Copyrights, GetSetGo. All rights reserved.                
            </div>
        )
    }
}