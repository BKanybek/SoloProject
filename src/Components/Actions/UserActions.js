import axios from "axios";
import { API } from "../../Helpers/Const";
import {
    getUsersAction,
    getOneUserAction,
    getUserToEditAction,
    clearUserToEditAction
} from "../Admin/Store/UserReducer";



const toastSettings = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined 
}

export const createUser = (newUser, toast) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${API}`, newUser)
            dispatch(getUsers())
            toast.success("User successfully created", toastSettings)
        } catch (e) {
            toast.error("Oups! Try again", toastSettings)
        }
    }
} 


export const getUsers = () => {
    return async (dispatch) => {
        try {
            const response = await axios (`${API}`)
            dispatch(getUsersAction(response.data))
        } catch (error) {
            console.log(error.response);
        }
    }
}

 
export const getOneUser = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios(`${API}/${id}`)
            dispatch(getOneUserAction(response.data))
        } catch (error) {
            console.log(error.response);
        }
    }
}

export const getUserToEdit = (id) => {
    return async(dispatch) => {
        try {
            const response = await axios (`${API}/${id}`)
            dispatch(getUserToEditAction(response.data))
        } catch (error) {
            console.log(error.response);       
        }
    }
}

export const saveEditedUser = ( editedUser, toast ) => {
    return async (dispatch) => {
        try {
            const response = await axios.put(`${API}/${editedUser.id}`, editedUser)
            dispatch(getUsers())
            toast.success('Changes successfully saved', toastSettings)
        } catch (e) {
            toast.error('Smth went wrong! Try again'. toastSettings)    
        }
    }
}

export const deleteUser = (id, toast) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(`${API}/${id}`)
            dispatch(getUsers)
            toast.success('User successfully deleted', toastSettings)
        } catch (e) {
            toast.error('Try again', toastSettings)  
        }
    }
}

export const clearUserToEdit = () => {
    return async (dispatch) => {
        try {
            dispatch(clearUserToEditAction(null))
        } catch (error) {
            console.log(error);
        }
    }
}