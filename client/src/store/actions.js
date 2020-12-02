import {SEARCH_PRODUCT, NEW_PRODUCT, USED_PRODUCT, MAYOR_PRECIO} from "./constants";
import axios from "axios";

export function getProducts(query, offset, sort) {
    return function(dispatch){
        console.log(`http://localhost:3001/search?q=${query}&offset=${offset}&sort=${sort}`)
        axios.get(`http://localhost:3001/search?q=${query}&offset=${offset}&sort=${sort}`)
        .then(res => {
            console.log(res.data)
            dispatch({ type: SEARCH_PRODUCT, payload: res.data})
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export function newProducts(condition){
    return function(dispatch){
        dispatch({ type: NEW_PRODUCT, payload: condition})
    }
}

export function usedProducts(condition){
    return function(dispatch){
        dispatch({ type: USED_PRODUCT, payload: condition})
    }
}

export function mayorPrecio(){
    return function(dispatch){
        dispatch({ type: MAYOR_PRECIO})
    }
}