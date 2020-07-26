
const productCart = (state = [],data) => {  
    switch(data.type){
        case "ADD_PRODUCT_TO_CART": 
            return [...state,data.payload]; 
        default:
            return state;
    }
}
export default  productCart; 