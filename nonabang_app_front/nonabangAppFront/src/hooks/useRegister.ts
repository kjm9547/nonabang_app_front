const data ={
    type:'',
}
export const useRegister = () => {
    const setRoomType = (type:string) =>{
        data.type = type;
    }
    const getRoomType = (type:string) => {
        
    }
    return{
        setRoomType,

    }
}