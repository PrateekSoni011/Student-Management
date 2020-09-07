import {
    LOGIN_DATA,
    SIGN_UP_DATA,
    STUDENT_DATA,
    STUDENT_REGISTER
} from "../actions/api";

export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN_DATA:
            return { ...state, api_data: action.data };
        case SIGN_UP_DATA:
            return { ...state, api_data: action.data }; 
        case STUDENT_DATA:
            return { ...state, api_data: action.data };
        case STUDENT_REGISTER:
            return { ...state, api_data: action.data };
        default:
            return state;
    }
}