const initState={
    isauthenticated:true,
   
}
const rootReducer=(state=initState,action)=>{
    if(action.type==='LOGIN')
    {
        return {
            ...state,
            isauthenticated:action.isauthenticated
        }
    }
    
    return state;
   
}

export default rootReducer;