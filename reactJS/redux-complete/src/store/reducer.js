let initialState={counter: 0,
list: [{name: 'Akash', id: '01'}, {name: 'Akshay', id: '02'}, {name: 'Shraddha', id: '03'}]}
export default (state = initialState, action)=>{
    console.log("Action", action);
    switch(action.type){
        case ('INCREMENT'):
            return {
                ...state,
                counter: state.counter+1
            }
        case ('DECREMENT'):
            return {
                ...state,
                counter: state.counter-1
            }
        case ('ADD'):
            return {
                ...state,
                counter: state.counter+action.val
            }
    }
    return state
}