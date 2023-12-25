export const increament = (amount=1) =>{
    return{
        type:'INCREAMENT'
        ,payload:amount
    }
};
export const decreament = (amount=1) =>{
    return{
        type:'DECREAMENT'
        ,payload:amount
    }
};