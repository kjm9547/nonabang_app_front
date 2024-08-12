import { SET_REGISTER_ADDRESS } from "../action/actionregister"

const initialState = {
    address:''
}

export const registerReducer = (state = initialState, action:any) =>{
    switch(action.type){
        case SET_REGISTER_ADDRESS:{
            return {
                ...state,
                registerData:state.address
            }
        }
    }
}