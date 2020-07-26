export const allProduct = (data) => {
    return{
        type:'FINAL_PRODUCTS',
        payload:data
    }
}
export const filterBrandAdd = (data) => {
    return{
        type:'FILTER_BRAND_ADD',
        payload:data
    }
}
export const filterBrandDelete = (data) => {
    return{
        type:'FILTER_BRAND_DELETE',
        payload:data
    }
}
export const filterColorAdd = (data) => {
    return{
        type:'FILTER_COLOR_ADD',
        payload:data
    }
}
export const filterColorDelete = (data) => {
    return{
        type:'FILTER_COLOR_DELETE',
        payload:data
    }
}
export const addProductToCart = (data) => {
    return{
        type:'ADD_PRODUCT_TO_CART',
        payload:data
    }
}
export const searchValue = (data) => {
    return{
        type:'ADD_SEARCH_VALUE',
        payload:data
    }
}
export const loginValue = (data) => {
    return{
        type:'ADD_LOGIN_VALUE',
        payload:data
    }
}