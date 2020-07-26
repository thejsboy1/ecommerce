
import { combineReducers} from "redux";
import allProduct from "./allProduct";  
import filterBrand from "./filterBrand";  
import filterColor from "./filterColor";  
import productCart from "./productCart";  
import SearchValue from "./searchValue";  
import LoginValue from "./loginValue";  

const allReducers = combineReducers({
    allProduct :allProduct, 
    filterBrand :filterBrand, 
    productCart :productCart, 
    filterColor :filterColor,
    SearchValue :SearchValue,
    LoginValue :LoginValue 
});

export default allReducers;