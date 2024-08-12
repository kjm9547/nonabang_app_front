const data ={
    type:'',
    address:''
}
export const useRegister = () => {
    const setRoomtype = (type:string) =>{
        data.type = type;
    }
    const getRoomtype = (type:string) => {
        
    }
    const setAddress = (type:string) =>{
        data.address = type;
    }
    const getAddress = () => {
       return data.address 
    }
    return{
        setRoomtype,
        setAddress,
        getAddress
    }
}