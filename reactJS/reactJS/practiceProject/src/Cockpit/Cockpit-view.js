import React, {Component} from 'react';
import Servers from '../Servers/Servers-view';
import styles from './Cockpit-style'
class Cockpit extends Component{
    constructor(){
        super();
        this.state = {serverName: '', serverAdded: 0}
    }
    render(){
        let {serverName, serverAdded} = this.state;
        let status = '';
        switch(serverAdded){
            case 0:
                status = <p>Please enter a name</p>
                break;
            case 1:
                status = <p>Please click on add to add the server</p>
                break;
            case 2:
                    status = <p>Server added successfully! 
                        <button onClick={()=>{this.setState({serverAdded: 0, serverName: ''})}}>x</button>
                    </p>
                break;
        }
        return (
            <div>
                <div>
                    <p>{serverName}</p>
                    <div style={styles.serverNameContainer}>
                        <input type="text" value={serverName} onChange={(e)=>{this.changeVal(e)}}/>
                    </div>
                    <div>
                        <button onClick={()=>{this.setState({serverAdded: 2})}}>Add</button>
                    </div>
                </div>
                <div>
                    <hr/>
                    {status}
                    <hr/>
                </div>
                <div>
                    <Servers/>
                </div>
            </div>
        )
    }
    changeVal(e){
        this.setState({serverName: e.target.value});
        if(e.target.value.length>0)
            this.setState({serverAdded: 1})
        else
            this.setState({serverAdded: 0})
        
    }
}
export default Cockpit;