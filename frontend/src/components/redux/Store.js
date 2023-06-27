import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserRedux"
const Store = configureStore({
    reducer : {
        user : UserReducer
    }
})

export default Store