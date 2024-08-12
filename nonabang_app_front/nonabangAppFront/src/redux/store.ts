import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./reducer/loginreducer";
import { registerReducer } from "./reducer/registerreducer";


export const store = configureStore({
    
    reducer:{
        loginUser: loginReducer,
        registerData:registerReducer
    }
  })

  export type RootReducer = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store