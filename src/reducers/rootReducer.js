const initState={
    isauthenticated:true,
    user_role:'',
    account:'',
    organizationlist:"",
    gas:"",
    gas_price:"",
   
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
        if(action.type==='ACCOUNT')
    {
        return {
            ...state,
            account:action.account
        }
    }
    if(action.type==='CONTRACT')
    {
        return{
            ...state,
            organizationlist:action.organizationlist
        }
    }
    if(action.type==='GAS')
    {
        return{
            ...state,
            gas:action.gas,
            gas_price:action.gas_price,
        }
    }
    
    return state;
   
}

export default rootReducer;