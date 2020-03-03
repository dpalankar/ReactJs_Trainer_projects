import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import {connect} from 'react-redux';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.OnIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.OnDecrementCounter}  />
                <CounterControl label="Add 5" clicked={()=>this.props.OnAddCounter(10)}  />
                <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler( 'sub', 5 )}  />
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
}
const mapDispatchToProps = dispatch =>{
    return {
        OnIncrementCounter: ()=>dispatch({type: 'INCREMENT'}),
        OnDecrementCounter: ()=>dispatch({type: 'DECREMENT'}),
        OnAddCounter: (v)=>dispatch({type: 'ADD', val: v})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);