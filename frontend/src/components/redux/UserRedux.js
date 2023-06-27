import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name : "user",
    initialState : {
        registeruser : JSON.parse(localStorage.getItem("registeruser")) || false,
        loginuser : JSON.parse(localStorage.getItem("loginuser")) || false,
        post : JSON.parse(localStorage.getItem("postarray")) || []
    },
    reducers : {
        addpost : (state, action)=> {
            state.post.push(action.payload)
            localStorage.setItem("post", JSON.stringify(state.post))
        },  
        addUser : (state, action) => {
            if(action.payload == "register"){
                console.log(action.payload);
                state.registeruser = true
                localStorage.setItem("registeruser", JSON.stringify(state.registeruser));
            }else{
                state.loginuser = true
                localStorage.setItem("loginuser", JSON.stringify(state.loginuser));
            }
        },
        deltepost : (state, action) =>{
            state.post = state.post.filter((user, id) => id !== action.payload)
            localStorage.setItem("postarray", JSON.stringify(state.post))
        }
    }
})

export const { addUser, addpost, deltepost} = userSlice.actions
export default userSlice.reducer