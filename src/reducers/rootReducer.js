const initState={
    isauthenticated:true,
    user_role:'',
   
}
const rootReducer=(state=initState,action)=>{
    if(action.type==='LOGIN')
    {
        return {
            ...state,
            isauthenticated:action.isauthenticated
        }
    }
    if(action.type==='ROLE')
    {
        return {
            ...state,
            user_role:action.user_role
        }
    }
    
    return state;
   
}

export default rootReducer;