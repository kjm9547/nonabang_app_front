const data={
    name:'',
    age:0,
    pw:'',
    id:'',
}
export const useSignUp = () => {
    const setName = (name:string) =>{
        data.name = name
    }
    const setAge = (age:any) =>{
        data.age = age
    }
    const setId = (id:string) =>{
        data.id = id
    }
    const setPw = (pw:string) =>{
        data.pw = pw
    }
    const getName = () => {return data.name}
    const getAge = () => {return data.age}
    const getId = () => {return data.id}
    const getPw = () => {return data.pw}
    return{
        setName,
        setId,
        setAge,
        setPw,
        getName,
        getAge,
        getId,
        getPw
    }
}