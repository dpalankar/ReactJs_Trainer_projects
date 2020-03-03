import React, { Component } from 'react';
import {connect} from 'react-redux';

class StoreList extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <ul>
                {this.props.list.map(e=><li onClick={() => this.props.onDeleteResult(e.id)}>{e.name}</li>)}
            </ul>
        )
    }

}
const mapStateToProps = state => {
    return {
        list: state.list
    };
}
const mapDispatchToProps = dispatch =>{
    return {
        onDeleteResult: (id) => dispatch({type: 'DEL_ITEM', id:id})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StoreList);