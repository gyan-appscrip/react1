import { GET_PRODUCTS } from ".";
import { get } from "../../lib/request";

function getProducts() {
    return (dispatch) => {
        get("")
            .then(json => {
                console.log(json.data);
                dispatch({
                    type: GET_PRODUCTS,
                    payload: json.data
                })
            })
    }
}

export default getProducts;