
const SearchValue = (state='',data) => {  
    switch(data.type){
        case "ADD_SEARCH_VALUE": 
            return [data.payload]; 
        default:
            return state;
    }
}
export default  SearchValue; 