import React, {Component} from 'react'
import Server from '../Server/Server-view';

export default class Servers extends Component{
    constructor(){
        super();
        this.state={
            name: "Akash", 
            servers:[
                {name: "Andromeda", status: 'online'}, 
                {name: "Milky-way", status: 'offline'}, 
                {name: "Star-trek", status: 'online'}]
        }
    }
    render(){
        let {servers} = this.state;
        return (
            <div>
                <ul>
                    {this.renderServers()}
                </ul>
                <div>
                    <button onClick={()=>{this.changeNames()}}>Change names</button>
                </div>
            </div>
        )
    }
    renderServers(){
        let {servers} = this.state;
        return servers.map((server, indx)=>{
            return <li key={`${server.name}-${indx}`}><Server name={server.name} status = {server.status} /></li>
        })
    }
    changeNames(){
        let temp_arr = this.state.servers.slice();
        for(let i = 0; temp_arr[i]; i++){
            temp_arr[i].name += "_0"+(i+1);
        }
        this.setState({servers:temp_arr})

    }
}