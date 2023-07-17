import { allReducers } from "./reducers";


const initialState = {
    cart: [{}],
    products: [{}, {}],
    user: null,
    other: "...",
    //foco...
    number: 0
}

export {
    allReducers,
    initialState
};