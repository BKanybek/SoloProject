import axios from 'axios';
import React, { createContext, useReducer} from 'react';
// import { calcSubPrice, calcTotalPrice } from '../Components/Cart/CalcPrice'
import { API2 } from '../Helpers/Const';
// import { auth } from '../Firebase';
// import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { calcSubPrice, calcTotalPrice } from '../Components/Cart/CalcPrice/CalcPrice';


export const equipmentContext = createContext()

const INIT_STATE = {
    equipments: null,
    edit: null,
    cart: {},
    cartLength: 0,
    paginatedPages: 1,
    detail: {},    
}

const reducer = (state = INIT_STATE, action) => {
    switch(action.type){
        case "GET_EQUIPMENTS":
            return {...state, equipments: action.payload.data, 
                paginatedPages: Math.ceil(action.payload.headers["x-total-count"] /6)}
        case "GET_EDIT_EQUIPMENTS":
            return{...state, edit: action.payload}
        case "CHANGE_CART_COUNT":
            return{...state, cartLength: action.payload}
        case "GET_CART":
            return{...state, cart: action.payload}  
        case "GET_DETAIL_EQUIPMENTS":
            return{...state, detail: action.payload}
        default: 
            return state
    }
    
}
const EquipmentContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    // ! CREATE 
    const addEquipment = async (newEquipment) =>  {
        try {
                await axios.post(API2, newEquipment)
                getEquipments()
        } catch (error) {
            alert(error)
        }
    }

    
    // ! READ   
    const getEquipments = async () => {
        try {
            let res = await axios.get(`${API2}${window.location.search}`)
            let action = {
                type: "GET_EQUIPMENTS",
                payload: res
            }
            
            dispatch(action)
    
        } catch (error) {
            alert(error)
        }
    }

     //! DELETE 
     const deleteEquipment = async (id) => {
        await axios.delete(`${API2}/${id}`)
        getEquipments()
    }

     //! Edit Product


     const  editEquipment = async (id) => {
        try {
            let res = await axios(`${API2}/${id}`)
            let action = {
                type: "GET_EDIT_EQUIPMENTS",
                payload: res.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
     //! save edited Product

     const saveEditedEquipment = async (updatedEquipment) => {
         console.log(updatedEquipment, 'here')
        try {
            await axios.patch(`${API2}/${updatedEquipment.id}`, updatedEquipment)
            getEquipments()
        }catch (error) {
            console.log(error);
        }
    }
    //! Add To CArt  dobavlenie v korzinu (localstorage)

    const addToCart = (equipment) => {
        let cart = JSON.parse(localStorage.getItem('cart'));
        if(!cart){
            cart = {
                equipments: [],
                totalPrice: 0
            }
        }
        let newEquipment = {
            item: equipment,
            count: 1,
            subPrice: 0
        }
        let filteredCart = checkEquipmentInCart(equipment.id)

        if (filteredCart === true ) {
            cart.equipments = cart.equipments.filter(elem => elem.item.id !== equipment.id )
        }else{
            cart.equipments.push(newEquipment)
        }
        newEquipment.subPrice = calcSubPrice (newEquipment)
        cart.totalPrice = calcTotalPrice(cart.equipments)
        localStorage.setItem('cart', JSON.stringify(cart))
        dispatch({
            type: "CHANGE_CART_COUNT",
            payload: cart.equipments.length
        })
       
    }

    
    const getCartLength = () => { 
        let cart = JSON.parse(localStorage.getItem('cart'));
        if(!cart){
            cart = {
                equipments: [],
                totalPrice: 0
            }
        }
        dispatch({
        type: "CHANGE_CART_COUNT",
        payload: cart.equipments.length
        })
    }

    const getCart = () => { 
        let cart = JSON.parse(localStorage.getItem('cart'));
        if(!cart){
            cart = {
                equipments: [],
                totalPrice: 0
            }
    }
    dispatch({
        type: "GET_CART",
        payload: cart
    })
    }
 
    const changeEquipmentCount = (count, id) => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        cart.equipments = cart.equipments.map(elem => {
            if(elem.item.id === id && count >= 0){ 
                    elem.count = count
                    elem.subPrice = calcSubPrice(elem)
            }
            return elem
        })
        cart.totalPrice = calcTotalPrice(cart.equipments)
        localStorage.setItem('cart', JSON.stringify(cart))
        getCart()
    }
    
    //! check product in cart



    const checkEquipmentInCart = (id) =>  {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if(!cart){
            cart = {
                equipments: [],
                totalPrice: 0
            }
        }
        let newCart = cart.equipments.filter(elem => elem.item.id === id)
        return newCart.length > 0 ? true : false
    }

    function deleteCartEquipment(id){
        let toDelete = JSON.parse(localStorage.getItem("cart"));
        toDelete.equipments = toDelete.equipments.filter(
          (elem) => elem.item.id !== id
        );
        localStorage.setItem("cart", JSON.stringify(toDelete))
        getCart()
        
        dispatch({
            type: "CHANGE_CART_COUNT",
            payload: toDelete.equipments.length
        })
      }
  


    //! GEt Detail

    const getDetail = async (id) => {
        const res = await axios(`${API2}/${id}`)
        let action = {
            type: "GET_DETAIL_EQUIPMENTS",
            payload: res.data
        }
        dispatch(action)
    }

    function deleteCartPayment(){
        localStorage.clear()
        let action = {
            type: "CHANGE_CART_COUNT",
            payload: 0
        }
        dispatch(action)
        
    }

    //! Sign IN / sign up

    // function signUp(email, password){
    //     return createUserWithEmailAndPassword(auth, email, password)
    // }
    // function signIn(email, password){
    //     return signInWithEmailAndPassword(auth, email, password)
    // }
    
    // function logout(){
    //     return signOut(auth)
    // }
    // function useAuth(){             
    //     const [currentUser, setCurrentUser] = useState() 

    //     useEffect(() => { 
    //         const unsub = onAuthStateChanged(auth, user => setCurrentUser(user))
    //         return unsub
    //     }, [])
    //     return currentUser
    // }

    return (
        <equipmentContext.Provider value={{
            addEquipment,
            getEquipments,
            deleteEquipment,
            editEquipment,
            saveEditedEquipment,
            addToCart,
            checkEquipmentInCart,
            getCartLength,
            getCart,
            changeEquipmentCount,
            getDetail,
            // signIn,
            // signUp,
            // logout,
            // useAuth,
            deleteCartEquipment,
            deleteCartPayment,
            edit: state.edit,
            equipments: state.equipments,
            cartLength: state.cartLength,
            cart: state.cart,
            paginatedPages: state.paginatedPages,
            detail: state.detail
        }}>
            {children}
        </equipmentContext.Provider>
    );
};

export default EquipmentContextProvider;
