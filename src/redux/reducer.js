import { GET_PRODUCTS } from "./actions"

const initialState = {
    products:null
}

const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case GET_PRODUCTS:
            return {products:action.payload}
        default:
            return state
    }
}

export default reducer