import { GET_USER_INFO } from "../actions/authAction";

const user = {
    name: '',
    email: '',
    photo: '',
    isLogin: false
}

export const authReducer = (state = user, action) => {
    switch (action.type) {
        case GET_USER_INFO:
            const googleRes = action.res;
            const newUser = {
                name: googleRes.name,
                email: googleRes.email,
                photo: googleRes.picture,
                isLogin: true,
            }
            return {...state, ...newUser};
        default:
            return state
    }
}