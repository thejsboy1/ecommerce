
const allProduct = (state = [],data) => { 
    switch(data.type){
        case "FINAL_PRODUCTS": 
            return [...state,data.payload];
            default:
                return state;
    }
}
export default  allProduct; 