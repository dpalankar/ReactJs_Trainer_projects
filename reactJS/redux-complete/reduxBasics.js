const Redux = require('redux');
const createStore = Redux.createStore;
let initialState = {counter: 0, test: 0}
//reducer
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case ('INC_COUNTER'):
        return {
            ...state,
            counter: state.counter+1
        }
        break;
        case ('ADD_COUNTER'):
        return {
            ...state,
            counter: state.counter+action.val
        }
        break;
        default:
        return{...state}
    }
    return state;    
}
//store
const store = createStore(reducer);
console.log(store.getState());

//subscription
store.subscribe(()=>{
    console.log("[Subscription]", store.getState())
})

//dispatching action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', val: 10});


