import { GET_CLASSES_DATA, GET_PRICING_DATA, GET_USER_ORDERS } from "../actions/dataAction"

const initialData = {
    pricing: [],
    classes:[],
    orders: [],

}

export const dataReducer = (state = initialData, action) => {
    switch (action.type) {
        case GET_PRICING_DATA:
            const prices = action.data;
            return { ...state, pricing: prices };
        case GET_CLASSES_DATA:
            const classess = action.data;
            return { ...state, classes: classess };
        case GET_USER_ORDERS:
            const orders = action.data;
            return {...state, orders: orders};
        default:
            return state
    }
}