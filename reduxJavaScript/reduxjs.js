const redux= require('redux');
const createStore=redux.legacy_createStore;
const initialState={
    color:'blue'

};
const myReducer =(state = initialState, action)=>{
    const newState={
        ...state   //speadopertor for copy eduth vekkan
    };
    // if(action.abc==2){
    //     newState.age+=1;
    // }
    if(action.type=='changeColor')
        newState.color='yellow';
    
    else(action.type=='changeColor')
        newState.color='white';
    
    return newState;

}
const store = createStore(myReducer);

store.subscribe(()=>{
    console.log(store.getState().color);
})
store.dispatch({
    type:'changeColor', //argument of dispatch
    // xyz:1,
    // abc:2
}); //call reducer is used for dispatch()
// console.log(store.getState()); //getstate() is used for getting store current value that means state value