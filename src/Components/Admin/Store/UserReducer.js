const defaultState ={
    users: [],
    oneUser: null,
    userToEdit: null,
}


const GET_USERS = "GET_USERS";
const GET_ONE_USER = "GET_ONE_USER";
const GET_USER_TO_EDIT = 'GET_USER_TO_EDIT';
const CLEAR_USER_TO_EDIT = 'CLEAR_USER_TO_EDIT';

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {...state, users: action.payload}
        case GET_ONE_USER:
            return {...state, oneUser: action.payload}
        case GET_USER_TO_EDIT:
            return {...state, userToEdit: action.payload}
        case CLEAR_USER_TO_EDIT:
            return {...state, userToEdit: action.payload }
        default:
            return state;
    }
}


export const getUsersAction = (payload) => ({type: GET_USERS, payload})
export const getOneUserAction = (payload) => ({type: GET_ONE_USER, payload})
export const getUserToEditAction = (payload) => ({type: GET_USER_TO_EDIT, payload})
export const clearUserToEditAction =(payload) => ({type: CLEAR_USER_TO_EDIT, payload})