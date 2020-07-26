
const filterColor = (state = [],data) => { 
    switch(data.type){
        case "FILTER_COLOR_ADD": 
            return [...state,data.payload];
        case "FILTER_COLOR_DELETE": 
            return state.filter((item) => data.payload !== item);
            default:
                return state;
    }
}
export default  filterColor; 