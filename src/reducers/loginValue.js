
const LoginValue = (state=[],data) => {  
    switch(data.type){
        case "ADD_LOGIN_VALUE": 
            return [data.payload]; 
            default:
                return state;
    }
}
export default  LoginValue; 