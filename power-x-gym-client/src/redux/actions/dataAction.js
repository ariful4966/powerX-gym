export const GET_PRICING_DATA = 'GET_PRICING_DATA';
export const getPricingData = (data) => {
    return { type: GET_PRICING_DATA, data }
}

export const GET_CLASSES_DATA = 'GET_CLASSES_DATA'
export const getClassesData = (data) => {
    return { type: GET_CLASSES_DATA, data }
}

export const GET_USER_ORDERS = 'GET_USER_ORDERS';
export const getUserOrder = (data) => {
    return { type: GET_USER_ORDERS, data }
}