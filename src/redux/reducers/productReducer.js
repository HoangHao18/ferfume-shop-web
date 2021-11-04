import *  as actionTypes from '../constants/productConstant';

const initialState = {
    productList: null,
    productSingle: null,
    //productListName: null,
    isLoading: true,
    errorMessage: null,
    //images: null
}

function productReducers(state = initialState, action) {
    switch(action.type){
        case actionTypes.PRODUCT_GET_LIST:
            return{
                ...state,
                productList: action.payload,
                isLoading: false,
            }
        case actionTypes.PRODUCT_DELETE_BY_ID:
            return{
                ...state,
                isLoading: false,
            }
        case actionTypes.PRODUCT_CREATE_NEW:
            return{
                ...state,
                isLoading: false,
            }
        case actionTypes.PRODUCT_GET_SINGLE:
            return{
                ...state,
                productSingle: action.payload,
                isLoading: false,
            }
        case actionTypes.PRODUCT_EDIT_BY_ID:
            return{
                ...state,
                isLoading: false,
            }
        case actionTypes.PRODUCT_GET_IMAGES:
            return{
                ...state,
                images: action.payload,
                isLoading: false,
            }
        default:
            return state;
    }
}

export default productReducers;