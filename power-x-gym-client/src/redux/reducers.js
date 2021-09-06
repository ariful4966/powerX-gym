import { GET_PRICING_DATA } from "./actions"

const initialData = {
    pricing: [],

}

export const dataReducer = (state = initialData, action) => {
    switch (action.type) {
        case GET_PRICING_DATA:
            const prices = action.data;
            return { ...state, pricing: prices };
        default:
            return state
    }
}