import {SEARCH_PRODUCT, NEW_PRODUCT, USED_PRODUCT, MAYOR_PRECIO} from "../constants";

const initialState = {
    products: [],
    offset: 0
}

export default function(state = initialState, action){
    switch(action.type){
        case SEARCH_PRODUCT:
            return {
                ...state,
                products: action.payload.results,
                offset: action.payload.paging.offset
            }

        case NEW_PRODUCT: 
            return {
                ...state,
                products: state.products.filter(prod => prod.condition === action.payload) 
            }  
        case USED_PRODUCT: 
            return { 
                ...state,
                products: state.products.filter(prod => prod.condition === action.payload) 
            }       
        case MAYOR_PRECIO: 
        return {
            ...state,
            products: state.products.sort((a, b) => a.price > b.price ? 1  : -1 )
        }    
        default: return state;
    }
}
