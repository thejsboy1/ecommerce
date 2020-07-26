
const filterBrand = (state = [],data) => { 
    switch(data.type){
        case "FILTER_BRAND_ADD": 
            return [...state,data.payload];
        case "FILTER_BRAND_DELETE": 
            return state.filter((item) => data.payload !== item);
        default:
            return state;
    }
}
export default  filterBrand; 