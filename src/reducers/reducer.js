const iState = {
    products: []
}

const reducer = (state=iState,action) => {
     if(action.type==='FINAL_PRODUCTS'){
         return{
            products:action.payload 
         }
     }
    return state;
}

export default reducer;