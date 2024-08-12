export const SET_REGISTER_ADDRESS = "SET_REGISTER_ADDRESS";

export const setRegisterAddress = (data:string) =>{
    return{
        type:SET_REGISTER_ADDRESS,
        data:data
    }
}
