const initState={
    isauthenticated:true,
    user_role:false,
    account:'',
    organizationlist:"",
    gas:"",
    gas_price:"",
    userid:''
   
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
    if(action.type==='USERID')
    {
        return{
        ...state,
        userid:action.userid
        }
    }
    
    return state;
   
}

export default rootReducer;