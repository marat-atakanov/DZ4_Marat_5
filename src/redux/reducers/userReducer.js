import {types} from '../types'

const initialState = {
    users: [],
    name: '',
    address: '',
    email: '',
    username: ''
}

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_USERS:
            return {...state, users: action.payload};
        case types.GET_USER_INFO:
            return {
                ...state,
                name: action.payload.name,
                address: action.payload.address.city + ", " + action.payload.address.street + ", " + action.payload.address.suite,
                email: action.payload.email,
                username: action.payload.username
            };
        default:
            return state;
    }
}