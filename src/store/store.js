import { configureStore,createStore } from "@reduxjs/toolkit";
import todoReducer from "../Reducers/todoReducer";
import storage from 'redux-persist/lib/storage';
import {persistStore,persistReducer, } from 'redux-persist'


const persistStorage={
    key:'root',
    storage
}
const persistReducers=persistReducer(persistStorage,todoReducer)
// export default configureStore({
    

//     reducer:{
//         toDo:todoReducer,
//     },
//     middleware:(getDefaultMiddleware)=>{
//         getDefaultMiddleware({
//             serializableCheck:{
//                 ignoreActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
//             }
//         })
//     }
    
// })


export    let store=createStore(persistReducers)
export    let persistor=persistStore(store)